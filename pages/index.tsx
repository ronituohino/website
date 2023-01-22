import Link from "next/link";
import type { NextPageContext } from "next";

import Title from "../components/Title";
import { Button } from "../components/Button";

export default function Home() {
  return (
    <>
      <section>
        <Title />
        <Link target="_blank" href="/sample.jpg">
          <Button color="red">Check out my CV</Button>
        </Link>
      </section>

      <section>
        <h2>Projects</h2>
      </section>

      <section>
        <h2>Contact</h2>
      </section>
    </>
  );
}

// This is run on the server, and the props are passed to the component above
export async function getStaticProps({ req }: NextPageContext) {
  return {
    props: {},
  };
}
