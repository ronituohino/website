import type { NextPageContext } from "next";
import Image from "next/image";
import Link from "next/link";

type Blog = {
  id: string;
  title: string;
  href: string;
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  imgAlt: string;
};

type BlogProps = {
  blogs: Blog[];
};

export default function Blog({ blogs }: BlogProps) {
  return (
    <>
      <h1>Blogs</h1>
      {blogs.map(blog => {
        return (
          <Link href={`/blog/${blog.href}`} key={blog.id}>
            <h3>{blog.title}</h3>
            <Image
              src={blog.imgSrc}
              alt={blog.imgAlt}
              width={blog.imgWidth}
              height={blog.imgHeight}
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
      blogs: [
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
    } satisfies BlogProps,
  };
}
