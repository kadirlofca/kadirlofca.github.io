import type { APIRoute } from "astro";
import sharp from "sharp";
import path from "path";
import siteData from "../../data/site.json";

export const GET: APIRoute = async () => {
  const W = 1200;
  const H = 630;

  const bgColor = "#ffffff";
  const fgColor = "#111827";
  const mutedColor = "#6b7280";
  const accentColor = "#0000ff";

  const picCx = 975;
  const picCy = H / 2;
  const picR = 140;

  const picPath = path.join(process.cwd(), "public", "user-picture.jpeg");
  const picBuf = await sharp(picPath)
    .resize(320, 320, { fit: "cover", position: "centre" })
    .jpeg({ quality: 85 })
    .toBuffer();
  const picDataUrl = `data:image/jpeg;base64,${picBuf.toString("base64")}`;

  const name = "Kadir Lofca";
  const tagline = "Software Engineer · Founder · Builder";

  const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect width="${W}" height="${H}" fill="${bgColor}"/>
  <rect x="0" y="0" width="6" height="${H}" fill="${accentColor}"/>

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

  <text x="72" y="240" font-family="sans-serif" font-size="72" font-weight="bold" fill="${fgColor}">${name}</text>
  <text x="72" y="310" font-family="sans-serif" font-size="28" fill="${mutedColor}">${tagline}</text>
  <text x="72" y="575" font-family="sans-serif" font-size="20" fill="${accentColor}">kadirlofca.com</text>

  <!-- CTA -->
  <rect x="${W - 200}" y="531" width="148" height="52" rx="8" fill="${accentColor}"/>
  <text x="${W - 126}" y="565" text-anchor="middle" font-family="sans-serif" font-size="26" font-weight="bold" fill="#ffffff">VIEW</text>
</svg>`;

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png, {
    headers: { "Content-Type": "image/png" },
  });
};
