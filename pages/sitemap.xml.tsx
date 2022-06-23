import { sanityClient } from "lib/sanity-server";
import { postSlugsQuery } from "lib/queries";

import { singleBlog } from "../blog/types";

export function createSitemap(blogs: singleBlog[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9>
      ${blogs
        .map((blog) => {
          return `
              <url>
                  <loc>${`https://mejhon.dev/${blog?.properties.slug.rich_text[0]?.plain_text}`}</loc>
              </url>
          `;
        })
        .join("")}
  </urlset>
  `;
}

export async function getServerSideProps({ res }) {
  const allPosts = await sanityClient.fetch(postSlugsQuery);
  const allPages = [
    ...allPosts.map((slug) => `blog/${slug}`),
    ...["", "contact", "blog", "work"],
  ];

  res.setHeader("Content-Type", "text/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1200, stale-while-revalidate=600",
  );
  res.write(createSitemap(allPages));
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {
  return null;
}
