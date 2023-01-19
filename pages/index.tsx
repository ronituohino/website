import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import { Text } from "../components/Text";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <Link href="/">Index</Link>
        <Link href="/blog">Blog</Link>

        <Link target="_blank" href="https://github.com/ronituohino">
          <BsGithub />
        </Link>
        <Link target="_blank" href="https://www.linkedin.com/in/ronituohino/">
          <BsLinkedin />
        </Link>
        <Link href="mailto:tuohinoroni@gmail.com">
          <MdEmail />
        </Link>
      </header>

      <article>
        <h1>Roni Tuohino</h1>
        <Link target="_blank" href="/sample.jpg">
          CV
        </Link>
      </article>

      <article>
        <h2>Projects</h2>
        <Text>Cool text!</Text>
      </article>

      <article>
        <h2>Contact</h2>
      </article>
    </>
  );
}
