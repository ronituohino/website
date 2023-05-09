import type { Project } from "../utils/getProjects";

import Head from "next/head";

import { LinkCard } from "../components/LinkCard";

import { LinkIcon } from "../components/LinkIcon";
import { Happy, GitHub, LinkedIn, Email } from "../components/SVG";

import styles from "./index.module.css";
import { getProjects } from "../utils/getProjects";
import { CVButton } from "../components/CVButton";
import { PeekingLinkButton } from "../components/PeekingLinkButton";
import Link from "next/link";

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
              Hi, I&apos;m{" "}
              <Link
                href="https://github.com/ronituohino"
                className={styles.roni}
              >
                Roni
              </Link>
              <Happy className={styles.happy} title="Hand drawn happy face." />
            </h1>

            <h2 className={styles.description}>
              I&apos;m passionate about technology and design.
            </h2>

            <CVButton className={styles.cv} />
            <div className={styles.links}>
              <LinkIcon
                href="https://github.com/ronituohino"
                icon={<GitHub title="" />}
              />

              <LinkIcon
                href="https://www.linkedin.com/in/ronituohino/"
                icon={<LinkedIn title="" />}
              />

              <LinkIcon
                href="mailto:tuohinoroni@gmail.com"
                icon={<Email title="" />}
              />
            </div>

            <div className={styles.projectsArrow}>
              Check out my projects!
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.9 138.5">
                <path
                  fill="none"
                  stroke="var(--svg-stroke-color)"
                  strokeLinecap="round"
                  strokeWidth="5"
                  d="M46.5 4c5.2 45.5-2.6 74-19.8 108.4v0M3.9 98.7c15.5 17 6.1 34.5 11.3 35.7 3.8.9 16-15 38.7-19.1v0"
                />
              </svg>
            </div>
          </header>
        </div>

        <div className={styles.projectsBackground}>
          <section id="projects" className={styles.projects}>
            <h2>Cool stuff that I&apos;ve worked on</h2>
            <h5 className={styles.coldStart}>
              *Demos may have slow load times due to a cold start
            </h5>
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
                        openInNewTab
                      />
                    )}
                  </div>
                );
              })}
            </li>
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
