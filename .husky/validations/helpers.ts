import { readFileSync, readdirSync, statSync } from "fs";
import { join, extname, relative, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const ROOT = join(__dirname, "../..");
export const SRC = join(ROOT, "src");

export function walkDir(dir: string, extensions: string[]): string[] {
  const results: string[] = [];
  for (const entry of readdirSync(dir)) {
    if (["node_modules", "dist", ".git", ".astro"].includes(entry)) continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...walkDir(full, extensions));
    } else if (extensions.includes(extname(entry))) {
      results.push(full);
    }
  }
  return results;
}

export function rel(file: string): string {
  return relative(ROOT, file);
}

export function read(file: string): string {
  return readFileSync(file, "utf-8");
}

export function allSource(): string[] {
  return walkDir(SRC, [".astro", ".css", ".ts", ".js"]);
}

export function allStyling(): string[] {
  return walkDir(SRC, [".astro", ".css"]);
}
