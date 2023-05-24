import "./globals.css";

import type { Metadata } from "next";

import Providers from "../components/Providers";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import type { ReactNode } from "react";

import localFont from "next/font/local";
const myFont = localFont({
  src: "../public/fonts/ShortStack.woff2",
  display: "swap",
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
    <html lang="en" className={myFont.className}>
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
