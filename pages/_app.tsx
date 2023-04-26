import type { AppProps } from "next/app";
import "./globals.css";

import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { ThemeSwitch } from "../components/ThemeSwitch";

import styles from "./app.module.css";
import { LinkButton } from "../components/LinkButton";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const linkDisabled = (comparisonPath: string) => {
    return comparisonPath === router.pathname;
  };

  const linkStyles = (disabled: boolean) => {
    if (disabled) {
      return styles.disabledLink;
    }
    return styles.link;
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider>
        <nav className={styles.navContainer}>
          <li className={styles.links}>
            <LinkButton
              variant="large"
              text="Home"
              href="/"
              disabled={linkDisabled("/")}
              className={linkStyles(linkDisabled("/"))}
            />
            <LinkButton
              variant="large"
              text="Blog"
              href="/blogs"
              disabled={linkDisabled("/blogs")}
              className={linkStyles(linkDisabled("/blogs"))}
            />
          </li>
          <ThemeSwitch className={styles.themeSwitch} />
        </nav>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
