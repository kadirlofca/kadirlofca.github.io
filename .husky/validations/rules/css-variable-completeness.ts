// Every var(--X) reference must be defined in global.css or set dynamically by JS.
import { allStyling, read, rel, ROOT } from "../helpers";
import { readFileSync } from "fs";
import { join } from "path";

// Variables set at runtime via element.style.setProperty() — not in global.css by design.
const DYNAMIC = new Set(["--scroll-distance", "--duration", "--tail-height"]);

function loadDefined(): Set<string> {
  const css = readFileSync(join(ROOT, "src/styles/global.css"), "utf-8");
  const defined = new Set<string>();
  for (const m of css.matchAll(/--[\w-]+(?=\s*:)/g)) defined.add(m[0]);
  return defined;
}

export function check(): Array<{ label: string; violations: string[] }> {
  const defined = loadDefined();
  const violations: string[] = [];

  for (const file of allStyling()) {
    const lines = read(file).split("\n");
    for (let i = 0; i < lines.length; i++) {
      for (const m of lines[i].matchAll(/var\((--[\w-]+)/g)) {
        const name = m[1];
        if (defined.has(name) || DYNAMIC.has(name)) continue;
        violations.push(`${rel(file)}:${i + 1} — var(${name}) is not defined in global.css`);
      }
    }
  }

  return [{ label: "css-variable-completeness: every var(--X) must be defined in global.css", violations }];
}
