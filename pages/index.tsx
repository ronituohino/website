import Link from "next/link";

import { Text } from "../components/Text";
import Title from "../components/Title";

export default function Home() {
  return (
    <>
      <section>
        <Title />
        <h1>Roni Tuohino</h1>
        <Link target="_blank" href="/sample.jpg">
          CV
        </Link>
      </section>

      <section>
        <h2>Projects</h2>
        <Text>Cool text!</Text>
      </section>

      <section>
        <h2>Contact</h2>
      </section>
    </>
  );
}
