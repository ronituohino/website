import type { FrameKeys } from "../../components/Frame";

import Head from "next/head";
import { LinkCard } from "../../components/LinkCard";

export type Article = {
  id: string;
  name: string;
  urlName: string;
  img: {
    src: string;
    width: string;
    frame: FrameKeys;
  };
};

type ArticlesProps = {
  articles: [Article];
};

export default function Articles({ articles }: ArticlesProps) {
  return (
    <>
      <Head>
        <title>Articles by Roni Tuohino</title>
        <meta name="description" content="Check out articles I have written." />
      </Head>
      <h1>Articles</h1>
      <li>
        {articles.map(article => {
          return (
            <LinkCard
              key={article.id}
              title={article.name}
              src={`/pictures/articles/${article.img.src}`}
              imgWidth={article.img.width}
              frame={article.img.frame}
              href={`/articles/${article.urlName}`}
            />
          );
        })}
      </li>
    </>
  );
}

// Run on build, loads articles from public folder at /public/api/articles.json
import fsPromises from "fs/promises";
import path from "path";
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "public", "api", "articles.json");
  const fileBuffer = await fsPromises.readFile(filePath);
  const articles = JSON.parse(fileBuffer.toString());

  return {
    props: {
      articles,
    },
  };
}
