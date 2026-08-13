import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import sharp from "sharp";

export async function getStaticPaths() {
  const posts = await getCollection("posts", ({ data }) => data.published);
  return posts.map((post) => ({
    params: { id: post.id },
    props: { title: post.data.title, description: post.data.description },
  }));
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function wrapText(text: string, maxChars: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const candidate = current ? current + " " + word : word;
    if (candidate.length > maxChars) {
      if (current) lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);
  return lines.slice(0, 3);
}

export const GET: APIRoute = async ({ props }) => {
  const { title, description } = props as {
    title: string;
    description: string;
  };

  const titleLines = wrapText(escapeXml(title), 36);
  const descLines = wrapText(escapeXml(description), 62).slice(0, 2);

  const titleLineHeight = 68;
  const descLineHeight = 36;
  const bottomPad = 60;
  const siteLineY = 630 - bottomPad;
  const descStartY =
    siteLineY - 32 - descLines.length * descLineHeight - 20;
  const titleStartY = descStartY - titleLines.length * titleLineHeight - 16;

  const titleSvg = titleLines
    .map(
      (line, i) =>
        `<text x="60" y="${titleStartY + i * titleLineHeight}" font-family="sans-serif" font-size="54" font-weight="bold" fill="#f0ece4">${line}</text>`
    )
    .join("\n");

  const descSvg = descLines
    .map(
      (line, i) =>
        `<text x="60" y="${descStartY + i * descLineHeight}" font-family="sans-serif" font-size="26" fill="#888888">${line}</text>`
    )
    .join("\n");

  const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#111111"/>
  <rect x="0" y="0" width="5" height="630" fill="#ff6400"/>
  ${titleSvg}
  ${descSvg}
  <text x="60" y="${siteLineY}" font-family="sans-serif" font-size="20" fill="#ff6400">kadirlofca.com</text>
</svg>`;

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png, {
    headers: { "Content-Type": "image/png" },
  });
};
