// Buttons must have non-zero padding to ensure adequate touch targets on mobile (≥44px recommended).
import { allStyling, rel, extractStyleContent, parseBlocks, CssBlock } from "../helpers";

const PSEUDO = /:(?:hover|focus|active|visited|disabled|focus-visible)/;

function isInteractiveRule({ selector, props }: CssBlock): boolean {
  if (PSEUDO.test(selector)) return false;
  // HTML button element selector
  if (/\bbutton\b/.test(selector)) return true;
  // Class-based button: cursor:pointer + font-size but no fixed dimensions (not an image/icon)
  return props.get("cursor") === "pointer" &&
    props.has("font-size") &&
    !props.has("width") &&
    !props.has("height");
}

function hasEffectivePadding(props: Map<string, string>): boolean {
  for (const [prop, val] of props) {
    if (/^padding/.test(prop) && /\d+(?:\.\d+)?(?:rem|em|px|%)/.test(val)) return true;
  }
  return false;
}

export function check(): Array<{ label: string; violations: string[] }> {
  const violations: string[] = [];

  for (const file of allStyling()) {
    for (const { selector, props } of parseBlocks(extractStyleContent(file))) {
      if (!isInteractiveRule({ selector, props })) continue;
      if (!hasEffectivePadding(props)) {
        violations.push(`${rel(file)}: "${selector}" — button has no padding (touch target may be too small)`);
      }
    }
  }

  return [{ label: "require-button-padding: buttons must have padding for adequate touch targets", violations }];
}
