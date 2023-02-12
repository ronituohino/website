import type { NextPageContext } from "next";
import { Brush } from "../components/SVG";

import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />

      <Brush
        width={256}
        height={256}
        className="brush"
        title="picture of a brush"
      />

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
