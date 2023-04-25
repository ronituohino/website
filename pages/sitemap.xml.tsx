import type { NextPageContext } from "next";

const BASE_URL = "https://ronituohino.fi";

import { getProjects } from "../utils/getProjects";
import { getBlogs } from "../utils/getBlogs";

// https://nextjs.org/learn/seo/crawling-and-indexing/xml-sitemaps
async function generateSiteMap() {
  const projects = await getProjects();
  const blogs = await getBlogs();

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the URLs we know already-->
     <url>
       <loc>${BASE_URL}</loc>
     </url>

     <!--Projects pages-->
     ${projects
       .map(project => {
         return `
       <url>
           <loc>${BASE_URL}/projects/${project.urlName}</loc>
       </url>
     `;
       })
       .join("")}

       <!--Blogs pages-->
       ${blogs
         .map(blog => {
           return `
        <url>
            <loc>${BASE_URL}/blogs/${blog.urlName}</loc>
        </url>
      `;
         })
         .join("")}
   </urlset>
 `;
}

export default function SiteMap() {}

export async function getServerSideProps({ res }: NextPageContext) {
  if (res) {
    const sitemap = await generateSiteMap();

    res.setHeader("Content-Type", "text/xml");
    // we send the XML to the browser
    res.write(sitemap);
    res.end();
  }

  return {
    props: {},
  };
}
