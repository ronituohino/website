import type { NextPageContext } from "next";
import Image from "next/image";
import Link from "next/link";

type Article = {
  id: string;
  title: string;
  href: string;
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  imgAlt: string;
};

type ArticleProps = {
  articles: Article[];
};

export default function Article({ articles }: ArticleProps) {
  return (
    <>
      <h1>Articles</h1>
      {articles.map(article => {
        return (
          <Link href={`/articles/${article.href}`} key={article.id}>
            <h3>{article.title}</h3>
            <Image
              src={article.imgSrc}
              alt={article.imgAlt}
              width={article.imgWidth}
              height={article.imgHeight}
            />
          </Link>
        );
      })}
    </>
  );
}

export async function getStaticProps({ req }: NextPageContext) {
  return {
    props: {
      articles: [
        {
          id: "0",
          title: "Data Fetching",
          href: "data-fetching",
          imgSrc: "https://picsum.photos/300/200",
          imgWidth: 300,
          imgHeight: 200,
          imgAlt: "random image",
        },
      ],
    } satisfies ArticleProps,
  };
}
