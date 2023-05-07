import { Blog, getBlogs } from "../../utils/getBlogs";

import Head from "next/head";
import { LinkCard } from "../../components/LinkCard";

import styles from "./Blogs.module.css";

type BlogsProps = {
  blogs: [Blog];
};

export default function Blogs({ blogs }: BlogsProps) {
  return (
    <>
      <Head>
        <title>Blogs by Roni</title>
        <meta
          name="description"
          content="Blogs by Roni Tuohino about tech and design stuff."
        />
      </Head>
      <article className={styles.container}>
        <h1 className={styles.title}>Blogs by Roni</h1>
        <h2 className={styles.temp}>
          Yeah I haven&apos;t written much yet lol
        </h2>
        <li>
          {blogs.map(blog => {
            return (
              <LinkCard
                key={blog.id}
                title={blog.name}
                src={`/pictures/blogs/${blog.img.src}`}
                imgWidth={blog.img.width}
                imgHeight={blog.img.height}
                imgXOffset={blog.img.xOffset}
                imgYOffset={blog.img.yOffset}
                frame={blog.img.frame}
                href={`/blogs/${blog.urlName}`}
              />
            );
          })}
        </li>
      </article>
    </>
  );
}

// Run on build
export async function getStaticProps() {
  return {
    props: {
      blogs: await getBlogs(),
    },
  };
}
