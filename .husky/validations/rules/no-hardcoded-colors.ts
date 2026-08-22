// No hardcoded hex/rgb colors outside :root — use CSS variables instead.
import { allStyling, read, rel } from "../helpers";

const HEX = /#[0-9a-fA-F]{3,8}(?![0-9a-fA-F])/;
const RGB = /\brgba?\s*\(/;

export function check(): Array<{ label: string; violations: string[] }> {
  const violations: string[] = [];

  for (const file of allStyling()) {
    const lines = read(file).split("\n");
    let inStyle = false;
    let inRoot = false;

    for (let i = 0; i < lines.length; i++) {
      if (/<style[^>]*>/.test(lines[i])) { inStyle = true; continue; }
      if (/<\/style>/.test(lines[i])) { inStyle = false; continue; }

      // For .css files, always scan; for .astro, only inside <style>
      const isCss = file.endsWith(".css");
      if (!isCss && !inStyle) continue;

      const line = lines[i].trim();
      if (!line || line.startsWith("/*") || line.startsWith("*") || line.startsWith("//")) continue;

      // Skip :root block where design tokens are defined
      if (line.includes(":root")) { inRoot = true; continue; }
      if (inRoot && line === "}") { inRoot = false; continue; }
      if (inRoot) continue;

      // Only flag property: value lines
      if (!/^[\w-]+\s*:/.test(line)) continue;
      if (HEX.test(line)) violations.push(`${rel(file)}:${i + 1} — hardcoded hex color (use CSS variable)`);
      else if (RGB.test(line)) violations.push(`${rel(file)}:${i + 1} — hardcoded rgba color (use CSS variable)`);
    }
  }

  return [{ label: "no-hardcoded-colors: use CSS variables for all colors", violations }];
}
