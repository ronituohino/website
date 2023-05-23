import "./globals.css";

import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { ThemeSwitch } from "../components/ThemeSwitch";

import styles from "./app.module.css";
import { PeekingLinkButton } from "../components/PeekingLinkButton";
import { usePathname } from "next/navigation";
import { InlineLink } from "../components/InlineLink";

import localFont from "next/font/local";
import type { Metadata } from "next";
const myFont = localFont({
  src: [
    { path: "fonts/ShortStack.woff2" },
    { path: "/fonts/ShortStack.woff" },
    { path: "/fonts/ShortStack.ttf" },
    { path: "/fonts/ShortStack.eot" },
  ],
});

export const metadata: Metadata = {
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const linkDisabled = (comparisonPath: string) => {
    return comparisonPath === pathname;
  };

  const linkStyles = (disabled: boolean) => {
    if (disabled) {
      return styles.disabledLink;
    }
    return styles.link;
  };

  return (
    <html lang="en" className={myFont.className}>
      <body>
        <>
          <Head>
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
            <main>{children}</main>
            <div className={styles.footerBackground}>
              <footer className={styles.footer}>
                Made by{" "}
                <InlineLink href="https://github.com/ronituohino">
                  me
                </InlineLink>
                , using{" "}
                <InlineLink href="https://nextjs.org/">next.js</InlineLink>.
              </footer>
            </div>
          </ThemeProvider>
        </>
      </body>
    </html>
  );
}
