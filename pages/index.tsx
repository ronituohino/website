import type { NextPageContext } from "next";

import styles from "./index.module.css";

import { Title } from "../components/Title";

import { LinkCard } from "../components/LinkCard";

import { LinkIcon } from "../components/LinkIcon";
import { Download } from "../components/SVG";
import { GitHub } from "../components/SVG";
import { LinkedIn } from "../components/SVG";
import { Email } from "../components/SVG";

export default function Home() {
  return (
    <div className={styles.background}>
      <main className={styles.container}>
        <Title className={styles.title} />

        <section className={styles.projects}>
          <LinkCard
            title="Recom"
            src="/pictures/recom-storepage.png"
            imgWidth="140"
            frame="roundBox1"
            href="/projects/recom"
          />
          <LinkCard
            title="Viitevarasto"
            src="/pictures/viitevarasto-menu.png"
            imgWidth="140"
            frame="box2"
            href="/projects/viitevarasto"
          />
          <LinkCard
            title="Battle Sheep"
            src="/pictures/battlesheep-game.png"
            imgWidth="120"
            frame="box1"
            href="/projects/battle-sheep"
          />
          <LinkCard
            title="GParticles"
            src="/pictures/gparticles-pinkishpurple.jpg"
            imgWidth="80"
            frame="phone"
            href="/projects/gparticles"
          />
        </section>

        <footer className={styles.links}>
          <LinkIcon
            icon={<Download title="" width="36" />}
            href="/sample.jpg"
            openInNewTab
            rightText="CV"
          />

          <LinkIcon
            href="https://github.com/ronituohino"
            openInNewTab
            icon={<GitHub title="" width="46" />}
          />

          <LinkIcon
            href="https://www.linkedin.com/in/ronituohino/"
            openInNewTab
            icon={<LinkedIn title="" width="36" />}
          />

          <LinkIcon
            href="mailto:tuohinoroni@gmail.com"
            icon={<Email title="" width="42" />}
          />
        </footer>
      </main>
    </div>
  );
}
