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

export interface CssBlock {
  selector: string;
  props: Map<string, string>;
}

/** Recursively parse CSS text into flat selector→props blocks, handling @media nesting. */
export function parseBlocks(css: string): CssBlock[] {
  const text = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const blocks: CssBlock[] = [];
  let i = 0, buf = "";

  while (i < text.length) {
    if (text[i] === "{") {
      const selector = buf.trim();
      buf = "";
      i++;
      let depth = 1, inner = "";
      while (i < text.length && depth > 0) {
        if (text[i] === "{") depth++;
        else if (text[i] === "}") { if (--depth === 0) break; }
        inner += text[i++];
      }
      i++; // skip closing }

      if (/^@(?:media|supports|layer)/.test(selector)) {
        blocks.push(...parseBlocks(inner));
      } else if (selector && !selector.startsWith("@")) {
        const props = new Map<string, string>();
        for (const decl of inner.split(";")) {
          const colon = decl.indexOf(":");
          if (colon === -1) continue;
          const prop = decl.slice(0, colon).trim().toLowerCase();
          const val = decl.slice(colon + 1).trim();
          if (prop) props.set(prop, val);
        }
        blocks.push({ selector, props });
      }
    } else {
      buf += text[i++];
    }
  }
  return blocks;
}

/** Extract CSS text from a file — full content for .css, <style> block for .astro. */
export function extractStyleContent(file: string): string {
  const content = read(file);
  if (file.endsWith(".css")) return content;
  const match = content.match(/<style[^>]*>([\s\S]*?)<\/style>/);
  return match ? match[1] : "";
}
