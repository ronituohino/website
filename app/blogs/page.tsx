import { Blog, getBlogs } from "../../utils/getBlogs";

import { LinkCard } from "../../components/LinkCard";

import styles from "./Blogs.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs by Roni",
  description: "Blogs by Roni Tuohino about tech and design stuff.",
};

export async function getStaticProps() {
  return { props: { blogs: await getBlogs() } };
}

type BlogsProps = {
  blogs: [Blog];
};

export default function Blogs({ blogs }: BlogsProps) {
  return (
    <>
      <div className={styles.background}>
        <article className={styles.container}>
          <h1 className={styles.title}>Blogs by Roni</h1>
          <h2 className={styles.temp}>
            Yeah I haven&apos;t written much yet lol
          </h2>
          <ul>
            <li>
              {blogs.map((blog) => {
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
          </ul>
        </article>
      </div>
    </>
  );
}
