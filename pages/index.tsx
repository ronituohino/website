import type { NextPageContext } from "next";

import styles from "./index.module.css";

import { LinkIcon } from "../components/LinkIcon";
import { BsArrowDownCircle } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";

import { Title } from "../components/Title";
import { Recom } from "../components/Projects/Recom";
import { GParticles } from "../components/Projects/GParticles";
import { BattleSheep } from "../components/Projects/BattleSheep";
import { Viitevarasto } from "../components/Projects/Viitevarasto";

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
            icon={<BsArrowDownCircle size={35} title="Download my CV" />}
            href="/sample.jpg"
            openInNewTab
            rightText="CV"
          />

          <LinkIcon
            href="https://github.com/ronituohino"
            openInNewTab
            icon={<BsGithub size={32} />}
          />

          <LinkIcon
            href="https://www.linkedin.com/in/ronituohino/"
            openInNewTab
            icon={<CiLinkedin size={40} strokeWidth={0.5} />}
          />

          <LinkIcon
            href="mailto:tuohinoroni@gmail.com"
            icon={<MdOutlineMail size={42} />}
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
