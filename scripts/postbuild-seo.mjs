// Writes dist/<route>/index.html for every route in src/seo-routes.json so that
// crawlers that do not run JavaScript still receive the correct title, description,
// canonical and Open Graph tags. Also regenerates dist/sitemap.xml.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const dist = "dist";
const { origin, routes } = JSON.parse(readFileSync("src/seo-routes.json", "utf8"));
const base = readFileSync(join(dist, "index.html"), "utf8");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const swap = (html, re, replacement) => {
  if (!re.test(html)) throw new Error(`postbuild-seo: pattern not found ${re}`);
  return html.replace(re, () => replacement);
};

for (const r of routes) {
  const url = origin + r.path;
  let html = base;
  html = swap(html, /<title>[\s\S]*?<\/title>/, `<title>${esc(r.title)}</title>`);
  html = swap(html, /<meta name="description" content="[^"]*"/, `<meta name="description" content="${esc(r.description)}"`);
  html = swap(html, /<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${url}"`);
  html = swap(html, /<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${url}"`);
  html = swap(html, /<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${esc(r.title)}"`);
  html = swap(html, /<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${esc(r.description)}"`);
  if (r.path === "/") {
    writeFileSync(join(dist, "index.html"), html);
  } else {
    const dir = join(dist, r.path);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "index.html"), html);
  }
}

const today = new Date().toISOString().slice(0, 10);
const urls = routes
  .map(
    (r) =>
      `  <url>\n    <loc>${origin}${r.path}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${r.path === "/" ? "1.0" : "0.8"}</priority>\n  </url>`
  )
  .join("\n");
writeFileSync(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);
console.log(`postbuild-seo: wrote ${routes.length} route pages and sitemap.xml`);
