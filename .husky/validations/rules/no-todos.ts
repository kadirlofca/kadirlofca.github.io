// No TODO, FIXME, HACK, or XXX comments in source files.
import { allSource, read, rel } from "../helpers";

export function check(): Array<{ label: string; violations: string[] }> {
  const violations: string[] = [];

  for (const file of allSource()) {
    const lines = read(file).split("\n");
    for (let i = 0; i < lines.length; i++) {
      if (/\b(TODO|FIXME|HACK|XXX)\b/.test(lines[i])) {
        violations.push(`${rel(file)}:${i + 1} — ${lines[i].trim()}`);
      }
    }
  }

  return [{ label: "no-todos: no TODO/FIXME/HACK/XXX comments in source", violations }];
}
