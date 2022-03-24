import api from "../blog/resources";
import { singleBlog } from "../blog/types";

export function generateSiteMap(blogs: singleBlog[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
          <loc>https://mejhon.dev</loc>
      </url>
      <url>
            <loc>https://mejhon.dev/</loc>
            <lastmod>2022-03-24T21:24:19+00:00</lastmod>
        </url>
        <url>
            <loc>https://mejhon.dev/work</loc>
            <lastmod>2022-03-24T21:24:19+00:00</lastmod>
        </url>
        <url>
            <loc>https://mejhon.dev/blog</loc>
            <lastmod>2022-03-24T21:24:19+00:00</lastmod>
        </url>
        <url>
            <loc>https://mejhon.dev/contact</loc>
            <lastmod>2022-03-24T21:24:19+00:00</lastmod>
        </url>
      ${blogs
        .map((blog) => {
          return `
              <url>
                  <loc>${`https://mejhon.dev/blog/${blog?.properties.slug.rich_text[0]?.plain_text}`}</loc>
              </url>
          `;
        })
        .join("")}
  </urlset>
  `;
}

function SiteMap() {}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const blogs = await api.list();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(blogs);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
