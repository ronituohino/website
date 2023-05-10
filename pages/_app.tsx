import type { AppProps } from "next/app";
import "./globals.css";

import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { ThemeSwitch } from "../components/ThemeSwitch";

import styles from "./app.module.css";
import { PeekingLinkButton } from "../components/PeekingLinkButton";
import { useRouter } from "next/router";
import { InlineLink } from "../components/InlineLink";

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
          <ul className={styles.links}>
            <li>
              <PeekingLinkButton
                variant="large"
                text="Home"
                href="/"
                disabled={linkDisabled("/")}
                className={linkStyles(linkDisabled("/"))}
              />
            </li>
            <li>
              <PeekingLinkButton
                variant="large"
                text="Blog"
                href="/blogs"
                disabled={linkDisabled("/blogs")}
                className={linkStyles(linkDisabled("/blogs"))}
              />
            </li>
          </ul>

          <ThemeSwitch className={styles.themeSwitch} />
        </nav>
        <Component {...pageProps} />
        <div className={styles.footerBackground}>
          <footer className={styles.footer}>
            Made by{" "}
            <InlineLink href="https://github.com/ronituohino">me</InlineLink>,
            using <InlineLink href="https://nextjs.org/">next.js</InlineLink>.
          </footer>
        </div>
      </ThemeProvider>
    </>
  );
}
