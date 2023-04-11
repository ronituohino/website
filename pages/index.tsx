import styles from "./index.module.css";

import { Title } from "../components/Title";

import {
  Recom,
  GParticles,
  Viitevarasto,
  BattleSheep,
} from "../components/ProjectCards";

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
          <Recom className={styles.recom} />
          <Viitevarasto className={styles.viitevarasto} />
          <BattleSheep className={styles.battleSheep} />
          <GParticles className={styles.gparticles} />
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
