import { Blog, getBlogs } from "../../utils/getBlogs";

import Head from "next/head";
import { LinkCard } from "../../components/LinkCard";

type BlogsProps = {
  blogs: [Blog];
};

export default function Blogs({ blogs }: BlogsProps) {
  return (
    <>
      <Head>
        <title>Blogs by Roni Tuohino</title>
        <meta name="description" content="Check out blogs I have written." />
      </Head>
      <h1>Blogs</h1>
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
