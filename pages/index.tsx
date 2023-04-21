import type { Project } from "../utils/getProjects";

import Head from "next/head";

import { LinkCard } from "../components/LinkCard";

import { LinkIcon } from "../components/LinkIcon";
import { Download, Happy, GitHub, LinkedIn, Email } from "../components/SVG";

import styles from "./index.module.css";
import { getProjects } from "../utils/getProjects";
import { CV } from "../components/CV";

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

      <main>
        <header className={styles.header}>
          <h1 className={styles.title}>
            Hi, I&apos;m Roni.
            <Happy
              className={styles.happy}
              width="1.5rem"
              title="Hand drawn happy face."
            />
          </h1>

          <h2 className={styles.description}>
            I&apos;m a developer, and I like tinkering and design.
          </h2>
        </header>

        <div className={styles.projectsBackground}>
          <li className={styles.projects}>
            {projects.map(project => {
              return (
                <LinkCard
                  key={project.id}
                  title={project.name}
                  src={`/pictures/projects/${project.img.src}`}
                  imgWidth={project.img.width}
                  imgHeight={project.img.height}
                  imgXOffset={project.img.xOffset}
                  imgYOffset={project.img.yOffset}
                  frame={project.img.frame}
                  href={`/projects/${project.urlName}`}
                />
              );
            })}
          </li>
        </div>

        <footer className={styles.footer}>
          <CV width="20rem" />
          <LinkIcon
            href="https://github.com/ronituohino"
            openInNewTab
            icon={<GitHub title="" width="60" />}
          />

          <LinkIcon
            href="https://www.linkedin.com/in/ronituohino/"
            openInNewTab
            icon={<LinkedIn title="" width="50" />}
          />

          <LinkIcon
            href="mailto:tuohinoroni@gmail.com"
            icon={<Email title="" width="50" />}
          />
        </footer>
      </main>
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
