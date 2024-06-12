const createSitemap = (slugs) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      ${slugs
        .map((slug) => {
          return `
              <url>
                  <loc>${`https://mejhon.dev/${slug}`}</loc>
              </url>
          `;
        })
        .join("")}
  </urlset>
  `;
};

export async function getServerSideProps({ res }) {
  const allPages = [...["", "contact", "blog", "work"]];
  res.setHeader("Content-Type", "text/xml");
  res.setHeader("Cache-Control", "public, s-maxage=1200, stale-while-revalidate=600");
  res.write(createSitemap(allPages));
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {
  return null;
}
