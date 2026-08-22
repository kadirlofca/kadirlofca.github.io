import { execSync } from "child_process";

console.log("pre-push: building...");
try {
  execSync("npm run build", { stdio: "inherit" });
} catch {
  console.error("\npre-push: build failed — fix errors before pushing");
  process.exit(1);
}
console.log("pre-push: build passed");
