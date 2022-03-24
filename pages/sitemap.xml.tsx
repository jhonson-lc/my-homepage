import api from "../blog/resources";
import { Blog } from "../blog/types";

export function generateSiteMap(blogs: Blog[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
          <loc>https://mejhon.dev</loc>
      </url>
      ${blogs
        .map(({ slug }) => {
          return `
              <url>
                  <loc>${`https:mejhon.dev/${slug}`}</loc>
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
