import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

import { Comfortaa } from "@next/font/google";
import { Header } from "../components/Header";
const roboto = Comfortaa({ weight: "400" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Roni Tuohino</title>
        <meta name="description" content="Roni Tuohino portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={roboto.className}>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
