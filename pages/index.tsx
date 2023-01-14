import { Inter } from "@next/font/google";
import { Test } from "../components/Test/Test";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <p>Normal font</p>
        <p className={inter.className}>Cool font trick</p>
        <Test />
      </main>
    </>
  );
}
