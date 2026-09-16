// Font sizes must be at least 0.75rem (12px) — smaller text is hard to read on mobile.
import { allStyling, rel, extractStyleContent, parseBlocks } from "../helpers";

export function check(): Array<{ label: string; violations: string[] }> {
  const violations: string[] = [];

  for (const file of allStyling()) {
    for (const { selector, props } of parseBlocks(extractStyleContent(file))) {
      const fs = props.get("font-size");
      if (!fs) continue;
      const m = fs.match(/^(0\.\d+)rem$/);
      if (m && parseFloat(m[1]) < 0.75) {
        violations.push(`${rel(file)}: "${selector}" — font-size ${fs} is below 0.75rem (12px)`);
      }
    }
  }

  return [{ label: "min-font-size: font sizes must be at least 0.75rem (12px)", violations }];
}
