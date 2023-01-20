import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

import { Roboto } from "@next/font/google";
const roboto = Roboto({ weight: "400" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Roni Tuohino</title>
        <meta name="description" content="Roni Tuohino portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={roboto.className}>
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
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
