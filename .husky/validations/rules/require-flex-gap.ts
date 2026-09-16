// Flex/grid containers for interactive UI regions must define a gap to prevent elements from touching.
import { allStyling, rel, extractStyleContent, parseBlocks } from "../helpers";

// Selectors that suggest a container holds interactive items side-by-side
const INTERACTIVE_CONTAINER = /\b(?:nav|socials|links|buttons|actions|toolbar|menu|tabs|pills)\b/i;
const PSEUDO = /:(?:hover|focus|active|visited|focus-visible)/;

export function check(): Array<{ label: string; violations: string[] }> {
  const violations: string[] = [];

  for (const file of allStyling()) {
    for (const { selector, props } of parseBlocks(extractStyleContent(file))) {
      if (PSEUDO.test(selector)) continue;
      if (!INTERACTIVE_CONTAINER.test(selector)) continue;

      const display = props.get("display");
      if (display !== "flex" && display !== "grid") continue;

      if (!props.has("gap")) {
        violations.push(`${rel(file)}: "${selector}" — flex/grid interactive container has no gap (items may be too close on mobile)`);
      }
    }
  }

  return [{ label: "require-flex-gap: interactive flex/grid containers must define a gap", violations }];
}
