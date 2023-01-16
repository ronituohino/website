import { Share_Tech_Mono } from "@next/font/google";
import { Test } from "../components/Test/Test";

const shareTechMono = Share_Tech_Mono({ weight: "400" });

export default function Home() {
  return (
    <>
      <main className={shareTechMono.className}>
        <p>Normal font</p>
        <Test />
      </main>
    </>
  );
}
