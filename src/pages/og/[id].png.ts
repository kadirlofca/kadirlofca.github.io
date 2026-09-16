import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import sharp from "sharp";
import fs from "fs";
import path from "path";

export async function getStaticPaths() {
  const posts = await getCollection("posts", ({ data }) => data.published);
  return posts.map((post) => ({
    params: { id: post.id },
    props: {
      title: post.data.title,
      description: post.data.descriptionHead + post.data.descriptionTail,
    },
  }));
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Estimate pixel width: avgRatio * fontSize per char, conservative
function wrapTextPx(
  text: string,
  maxPx: number,
  fontSize: number,
  bold: boolean,
  maxLines: number
): string[] {
  const avgRatio = bold ? 0.60 : 0.55;
  const charW = fontSize * avgRatio;
  const maxChars = Math.floor(maxPx / charW);

  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";

  for (const word of words) {
    const candidate = current ? current + " " + word : word;
    if (candidate.length > maxChars) {
      if (current) lines.push(current);
      // Long single word — truncate if needed
      current = word.length > maxChars ? word.slice(0, maxChars - 1) + "…" : word;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);
  return lines.slice(0, maxLines);
}

async function profilePicDataUrl(): Promise<string> {
  const picPath = path.join(process.cwd(), "public", "user-picture.jpeg");
  const buf = await sharp(picPath)
    .resize(280, 280, { fit: "cover", position: "centre" })
    .jpeg({ quality: 85 })
    .toBuffer();
  return `data:image/jpeg;base64,${buf.toString("base64")}`;
}

export const GET: APIRoute = async ({ props }) => {
  const { title, description } = props as {
    title: string;
    description: string;
  };

  const W = 1200;
  const H = 630;

  // Site theme
  const bgColor = "#ffffff";
  const fgColor = "#111827";
  const mutedColor = "#6b7280";
  const accentColor = "#0000ff"; // hsl(240, 100%, 50%) from global.css

  // Layout
  const padLeft = 72;
  const padTop = 80;
  const picCx = 975;
  const picCy = H / 2;
  const picR = 125;
  const textMaxPx = picCx - picR - 40 - padLeft; // stop before profile pic

  // Profile picture
  const picDataUrl = await profilePicDataUrl();

  // Name label
  const nameFontSize = 20;
  const nameY = padTop + nameFontSize;

  // Title
  const titleFontSize = 56;
  const titleLineH = 68;
  const titleStartY = nameY + 48;
  const titleLines = wrapTextPx(escapeXml(title), textMaxPx, titleFontSize, true, 2);

  // Description
  const descFontSize = 26;
  const descLineH = 36;
  const descStartY = titleStartY + titleLines.length * titleLineH + 24;
  const descLines = wrapTextPx(escapeXml(description), textMaxPx, descFontSize, false, 3);

  // Site URL
  const siteY = H - 55;

  const titleSvg = titleLines
    .map(
      (line, i) =>
        `<text x="${padLeft}" y="${titleStartY + i * titleLineH}" font-family="sans-serif" font-size="${titleFontSize}" font-weight="bold" fill="${fgColor}">${line}</text>`
    )
    .join("\n");

  const descSvg = descLines
    .map(
      (line, i) =>
        `<text x="${padLeft}" y="${descStartY + i * descLineH}" font-family="sans-serif" font-size="${descFontSize}" fill="${mutedColor}">${line}</text>`
    )
    .join("\n");

  const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect width="${W}" height="${H}" fill="${bgColor}"/>

  <!-- Left accent bar -->
  <rect x="0" y="0" width="6" height="${H}" fill="${accentColor}"/>

  <!-- Subtle right background panel -->
  <rect x="${picCx - picR - 30}" y="0" width="${W - (picCx - picR - 30)}" height="${H}" fill="#f9fafb"/>

  <!-- Profile picture clipped to circle -->
  <defs>
    <clipPath id="pic-clip">
      <circle cx="${picCx}" cy="${picCy}" r="${picR}"/>
    </clipPath>
  </defs>
  <image href="${picDataUrl}"
    x="${picCx - picR}" y="${picCy - picR}"
    width="${picR * 2}" height="${picR * 2}"
    clip-path="url(#pic-clip)"
    preserveAspectRatio="xMidYMid slice"/>
  <circle cx="${picCx}" cy="${picCy}" r="${picR}" fill="none" stroke="#e5e7eb" stroke-width="2"/>

  <!-- Name label -->
  <text x="${padLeft}" y="${nameY}" font-family="sans-serif" font-size="${nameFontSize}" fill="${mutedColor}">Kadir Lofca</text>

  <!-- Title -->
  ${titleSvg}

  <!-- Description -->
  ${descSvg}

  <!-- Site URL -->
  <text x="${padLeft}" y="${siteY}" font-family="sans-serif" font-size="20" fill="${accentColor}">kadirlofca.com</text>

  <!-- CTA -->
  <rect x="${W - 236}" y="${siteY - 40}" width="184" height="44" rx="8" fill="${accentColor}"/>
  <text x="${W - 144}" y="${siteY - 11}" text-anchor="middle" font-family="sans-serif" font-size="19" font-weight="bold" fill="#ffffff">View Portfolio →</text>
</svg>`;

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png, {
    headers: { "Content-Type": "image/png" },
  });
};
