import { Article, getArticles } from "../../utils/getArticles";

import Head from "next/head";
import { LinkCard } from "../../components/LinkCard";

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

// Run on build
export async function getStaticProps() {
  return {
    props: {
      articles: await getArticles(),
    },
  };
}
