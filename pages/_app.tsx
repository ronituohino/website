import type { AppProps } from "next/app";
import "./globals.css";

import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { ThemeSwitch } from "../components/ThemeSwitch";

import styles from "./app.module.css";

import { buttonFrames } from "../components/ButtonFrame";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider>
        <nav className={styles.navContainer}>
          <li className={styles.links}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox={buttonFrames.large[1].viewBox}
            >
              {buttonFrames.large[0]}
            </svg>
          </li>
          <ThemeSwitch className={styles.themeSwitch} />
        </nav>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
