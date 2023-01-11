import Head from "next/head";
import { Inter } from "@next/font/google";
import { Test } from "../components/Test/Test";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Roni Tuohino Portfolio</title>
        <meta name="description" content="Roni Tuohino portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>Normal font</p>
        <p className={inter.className}>Cool font trick</p>
        <Test />
      </main>
    </>
  );
}
