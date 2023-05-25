import "./globals.css";

import type { Metadata } from "next";

import Providers from "../components/Providers";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import type { ReactNode } from "react";

import localFont from "next/font/local";
const ShortStack = localFont({
  src: [{ path: "./fonts/ShortStack.woff2" }],
  display: "auto",
  preload: true,
});

export const metadata: Metadata = {
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className={ShortStack.className}>
      <body>
        <Providers>
          <Nav />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
