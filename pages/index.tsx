import type { NextPageContext } from "next";

import styles from "./index.module.css";

import { Title } from "../components/Title";
import { Recom } from "../components/Projects/Recom";
import { Viitevarasto } from "../components/Projects/Viitevarasto";
import { BattleSheep } from "../components/Projects/BattleSheep";
import { GParticles } from "../components/Projects/GParticles";

import { LinkIcon } from "../components/LinkIcon";
import { Download } from "../components/SVG";
import { GitHub } from "../components/SVG";
import { LinkedIn } from "../components/SVG";
import { Email } from "../components/SVG";

export default function Home() {
  return (
    <>
      <section className={styles.container}>
        <Title />
      </section>

      <section>
        <Recom />
        <Viitevarasto />
        <BattleSheep />
        <GParticles />
      </section>

      <section>
        <h2>Contact</h2>
        <div className={styles.links}>
          <LinkIcon
            icon={<Download title="" width={36} />}
            href="/sample.jpg"
            openInNewTab
            rightText="CV"
          />

          <LinkIcon
            href="https://github.com/ronituohino"
            openInNewTab
            icon={<GitHub title="" width={46} />}
          />

          <LinkIcon
            href="https://www.linkedin.com/in/ronituohino/"
            openInNewTab
            icon={<LinkedIn title="" width={36} />}
          />

          <LinkIcon
            href="mailto:tuohinoroni@gmail.com"
            icon={<Email title="" width={42} />}
          />
        </div>
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
