import { Title } from "../Title";
import Link from "next/link";

import styles from "./Hero.module.css";

import { LinkIcon } from "../LinkIcon";
import { BsArrowDownCircle } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";

export function Hero() {
  return (
    <section className={styles.container}>
      <Title />

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
  );
}
