import { GetStaticProps, NextPageContext } from "next";
import type { Project } from "..";
import type { Article } from "../articles";

const BASE_URL = "https://ronituohino.fi";

import fsPromises from "fs/promises";
import path from "path";

// https://nextjs.org/learn/seo/crawling-and-indexing/xml-sitemaps
async function generateSiteMap() {
  const projectsPath = path.join(
    process.cwd(),
    "public",
    "api",
    "projects.json"
  );
  const projectsBuffer = await fsPromises.readFile(projectsPath);
  const projects = JSON.parse(projectsBuffer.toString()) as [Project];

  const articlesPath = path.join(
    process.cwd(),
    "public",
    "api",
    "articles.json"
  );
  const articlesBuffer = await fsPromises.readFile(articlesPath);
  const articles = JSON.parse(articlesBuffer.toString()) as [Article];

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

       <!--Articles pages-->
       ${articles
         .map(article => {
           return `
        <url>
            <loc>${BASE_URL}/articles/${article.urlName}</loc>
        </url>
      `;
         })
         .join("")}
   </urlset>
 `;
}

export async function getStaticProps(context: NextPageContext) {
  const sitemap = await generateSiteMap();
  const res = context.res;
  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}
