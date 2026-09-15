// Font sizes must use rem/em, not px — px ignores user browser font preferences.
import { allStyling, read, rel } from "../helpers";

const PX_FONT = /font-size\s*:\s*\d+(?:\.\d+)?px\b/;

export function check(): Array<{ label: string; violations: string[] }> {
  const violations: string[] = [];

  for (const file of allStyling()) {
    const lines = read(file).split("\n");
    let inStyle = false;

    for (let i = 0; i < lines.length; i++) {
      if (/<style[^>]*>/.test(lines[i])) { inStyle = true; continue; }
      if (/<\/style>/.test(lines[i])) { inStyle = false; continue; }

      const isCss = file.endsWith(".css");
      if (!isCss && !inStyle) continue;

      const line = lines[i].trim();
      if (!line || line.startsWith("/*") || line.startsWith("*") || line.startsWith("//")) continue;

      if (PX_FONT.test(line)) {
        violations.push(`${rel(file)}:${i + 1} — px font-size (use rem instead)`);
      }
    }
  }

  return [{ label: "no-px-font-sizes: font sizes must use rem/em, not px", violations }];
}
