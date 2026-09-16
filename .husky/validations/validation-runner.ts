import { check as noHardcodedColors } from "./rules/no-hardcoded-colors";
import { check as cssVariableCompleteness } from "./rules/css-variable-completeness";
import { check as noHardcodedDurations } from "./rules/no-hardcoded-durations";
import { check as noTodos } from "./rules/no-todos";
import { check as noPxFontSizes } from "./rules/no-px-font-sizes";
import { check as requireAltText } from "./rules/require-alt-text";
import { check as minFontSize } from "./rules/min-font-size";
import { check as requireButtonPadding } from "./rules/require-button-padding";
import { check as requireFlexGap } from "./rules/require-flex-gap";

const rules = [noHardcodedColors, cssVariableCompleteness, noHardcodedDurations, noTodos, noPxFontSizes, requireAltText, minFontSize, requireButtonPadding, requireFlexGap];

const failures: Array<{ label: string; violations: string[] }> = [];

for (const rule of rules) {
  for (const result of rule()) {
    if (result.violations.length > 0) failures.push(result);
  }
}

if (failures.length === 0) {
  console.log("guidelines: all checks passed");
  process.exit(0);
} else {
  console.error(`\nguidelines: ${failures.length} rule(s) violated\n`);
  for (const { label, violations } of failures) {
    console.error(`✗ ${label}`);
    for (const v of violations) console.error(`    ${v}`);
    console.error("");
  }
  process.exit(1);
}
