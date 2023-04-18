import type { Project } from "../utils/getProjects";

import Head from "next/head";
import { Profile } from "../components/SVG";

import { LinkCard } from "../components/LinkCard";

import { LinkIcon } from "../components/LinkIcon";
import { Download } from "../components/SVG";
import { GitHub } from "../components/SVG";
import { LinkedIn } from "../components/SVG";
import { Email } from "../components/SVG";

import styles from "./index.module.css";
import { getProjects } from "../utils/getProjects";

type IndexProps = {
  projects: [Project];
};

export default function Index({ projects }: IndexProps) {
  return (
    <>
      <Head>
        <title>Roni Tuohino</title>
        <meta name="description" content="Welcome to my portfolio!" />
      </Head>
      <div className={styles.background}>
        <main className={styles.container}>
          <header className={styles.header}>
            <h1 className={styles.title}>Hi, I&apos;m Roni.</h1>
            <h2 className={styles.description}>
              I&apos;m a developer, and I like tinkering and design.
            </h2>

            <Profile
              title="Illustration of me: a guy with blonde hair and a gray turtleneck."
              width="100%"
              className={styles.profile}
            />
          </header>

          <li className={styles.projects}>
            {projects.map(project => {
              return (
                <LinkCard
                  key={project.id}
                  title={project.name}
                  src={`/pictures/projects/${project.img.src}`}
                  imgWidth={project.img.width}
                  frame={project.img.frame}
                  href={`/projects/${project.urlName}`}
                />
              );
            })}
          </li>

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
    </>
  );
}

// Run on build
export async function getStaticProps() {
  return {
    props: {
      projects: await getProjects(),
    },
  };
}
