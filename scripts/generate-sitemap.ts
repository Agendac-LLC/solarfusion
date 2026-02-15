export function generateSitemap(): string {
  const baseUrl = "https://agendac-llc.github.io/solarfusion";
  const currentDate = new Date().toISOString();
  
  const pages = [
    { url: "/", priority: "1.0", changefreq: "weekly" },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
}
