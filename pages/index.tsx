import type { NextPageContext } from "next";

import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />

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
