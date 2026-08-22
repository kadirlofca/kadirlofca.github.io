import { execSync } from "child_process";

const steps: Array<{ label: string; cmd: string }> = [
  { label: "astro check", cmd: "npx astro check" },
  { label: "guidelines",  cmd: "npx tsx .husky/validations/validation-runner.ts" },
];

for (const { label, cmd } of steps) {
  console.log(`pre-commit: ${label}...`);
  try {
    execSync(cmd, { stdio: "inherit" });
  } catch {
    process.exit(1);
  }
}
