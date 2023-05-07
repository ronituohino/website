import type { Project } from "../utils/getProjects";

import Head from "next/head";

import { LinkCard } from "../components/LinkCard";

import { LinkIcon } from "../components/LinkIcon";
import { Happy, GitHub, LinkedIn, Email } from "../components/SVG";

import styles from "./index.module.css";
import { getProjects } from "../utils/getProjects";
import { CVButton } from "../components/CVButton";
import { PeekingLinkButton } from "../components/PeekingLinkButton";

type IndexProps = {
  projects: [Project];
};

export default function Index({ projects }: IndexProps) {
  return (
    <>
      <Head>
        <title>Roni Tuohino</title>
        <meta
          name="description"
          content="Hey, need a web developer? Check me out, or not ¯\_(ツ)_/¯"
        />
      </Head>

      <main>
        <div className={styles.headerBackground}>
          <header className={styles.header}>
            <h1 className={styles.title}>
              Hi, I&apos;m <span className={styles.roni}>Roni</span>
              <Happy
                className={styles.happy}
                width="1.5rem"
                title="Hand drawn happy face."
              />
            </h1>

            <h2 className={styles.description}>
              I&apos;m a developer and passionate about new technologies and
              design.
            </h2>
          </header>
        </div>

        <div className={styles.projectsBackground}>
          <section className={styles.projects}>
            <h2>Here are some projects that I&apos;ve worked on</h2>
            <h4 className={styles.coldStart}>
              *Some of the demos take a while to load due to a cold start
            </h4>
            <li className={styles.projectsList}>
              {projects.map(project => {
                return (
                  <div key={project.id} className={styles.project}>
                    <LinkCard
                      title={project.name}
                      src={`/pictures/projects/${project.img.src}`}
                      imgWidth={project.img.width}
                      imgHeight={project.img.height}
                      imgXOffset={project.img.xOffset}
                      imgYOffset={project.img.yOffset}
                      frame={project.img.frame}
                      href={`/projects/${project.urlName}`}
                      className={styles.projectCard}
                    />
                    {project.btn && (
                      <PeekingLinkButton
                        variant="large"
                        text={project.btn.text}
                        href={project.btn.href}
                        className={styles.demoButton}
                      />
                    )}
                  </div>
                );
              })}
            </li>
          </section>
        </div>

        <div className={styles.contactBackground}>
          <section className={styles.contact}>
            <h2>Need something done on the web? Shoot me a message!</h2>
            <CVButton className={styles.cv} />
            <div className={styles.links}>
              <LinkIcon
                href="https://github.com/ronituohino"
                openInNewTab
                icon={<GitHub title="" />}
              />

              <LinkIcon
                href="https://www.linkedin.com/in/ronituohino/"
                openInNewTab
                icon={<LinkedIn title="" />}
              />

              <LinkIcon
                href="mailto:tuohinoroni@gmail.com"
                icon={<Email title="" />}
              />
            </div>
          </section>
        </div>
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
