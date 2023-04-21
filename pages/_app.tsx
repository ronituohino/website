import type { AppProps } from "next/app";
import "./globals.css";

import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { ThemeSwitch } from "../components/ThemeSwitch";

import styles from "./app.module.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider>
        <nav className={styles.navContainer}>
          <ThemeSwitch className={styles.themeSwitch} />
        </nav>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
