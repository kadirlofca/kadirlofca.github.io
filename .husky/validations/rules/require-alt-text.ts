// All <img> and <Image> tags must have an alt attribute (empty string is valid for decorative images).
import { allStyling, read, rel } from "../helpers";
import { walkDir } from "../helpers";
import { join } from "path";
import { ROOT } from "../helpers";

const IMG_TAG = /<(?:img|Image)\b/;
const HAS_ALT = /\balt\s*=/;

export function check(): Array<{ label: string; violations: string[] }> {
  const violations: string[] = [];
  const files = walkDir(join(ROOT, "src"), [".astro", ".html"]);

  for (const file of files) {
    const lines = read(file).split("\n");
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (IMG_TAG.test(line) && !HAS_ALT.test(line)) {
        violations.push(`${rel(file)}:${i + 1} — <img> or <Image> missing alt attribute`);
      }
    }
  }

  return [{ label: "require-alt-text: all images must have an alt attribute", violations }];
}
