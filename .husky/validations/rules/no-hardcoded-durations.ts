// No bare timing values in transition/animation declarations — use CSS variables.
import { allStyling, read, rel } from "../helpers";

const TIMING = /(?:transition|animation)\s*:[^;]*\b\d+(?:\.\d+)?(?:ms|s)\b/;
// Matches .style.transition = '...' or .style.animation = '...' with a bare number+unit
const SCRIPT_STYLE_TIMING = /\.style\.(transition|animation)\s*=\s*(?:`|'|")[^`'"]*\d+(?:\.\d+)?(?:ms|s)\b/;

export function check(): Array<{ label: string; violations: string[] }> {
  const violations: string[] = [];

  for (const file of allStyling()) {
    const lines = read(file).split("\n");
    let inStyle = false;
    let inScript = false;

    for (let i = 0; i < lines.length; i++) {
      if (/<style[^>]*>/.test(lines[i])) { inStyle = true; continue; }
      if (/<\/style>/.test(lines[i])) { inStyle = false; continue; }
      if (/<script[^>]*>/.test(lines[i])) { inScript = true; continue; }
      if (/<\/script>/.test(lines[i])) { inScript = false; continue; }

      const isCss = file.endsWith(".css");
      const line = lines[i].trim();
      if (!line || line.startsWith("/*") || line.startsWith("*") || line.startsWith("//")) continue;

      if (isCss || inStyle) {
        if (!TIMING.test(line)) continue;
        const stripped = line.replace(/var\([^)]*\)/g, "var()");
        if (TIMING.test(stripped)) {
          violations.push(`${rel(file)}:${i + 1} — hardcoded timing value (use var(--transition-*))`);
        }
      } else if (inScript) {
        if (!SCRIPT_STYLE_TIMING.test(line)) continue;
        const stripped = line.replace(/var\([^)]*\)/g, "var()");
        if (SCRIPT_STYLE_TIMING.test(stripped)) {
          violations.push(`${rel(file)}:${i + 1} — hardcoded timing in style assignment (use var(--transition-*))`);
        }
      }
    }
  }

  return [{ label: "no-hardcoded-durations: use var(--transition-*) for all timing values", violations }];
}
