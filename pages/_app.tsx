import "./globals.css";
import styles from "./app.module.css";

import Head from "next/head";
import type { AppProps } from "next/app";

import { Header } from "../components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Roni Tuohino</title>
        <meta name="description" content="Roni Tuohino portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.background}>
        <Header />
        <main className={styles.main}>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
