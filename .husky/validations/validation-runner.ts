import { check as noHardcodedColors } from "./rules/no-hardcoded-colors";
import { check as cssVariableCompleteness } from "./rules/css-variable-completeness";
import { check as noHardcodedDurations } from "./rules/no-hardcoded-durations";
import { check as noTodos } from "./rules/no-todos";

const rules = [noHardcodedColors, cssVariableCompleteness, noHardcodedDurations, noTodos];

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
