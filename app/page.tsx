import { Metadata } from "next";

import type { Project } from "../utils/getProjects";

import Link from "next/link";

import { LinkCard } from "../components/LinkCard";
import { LinkIcon } from "../components/LinkIcon";
import { Arrow, Happy, GitHub, LinkedIn, Email } from "../components/SVG";

import { getProjects } from "../utils/getProjects";
import { CVButton } from "../components/CVButton";
import { PeekingLinkButton } from "../components/PeekingLinkButton";

import styles from "./index.module.css";

export const metadata: Metadata = {
  title: "Roni Tuohino",
  description: "Hey, need a web developer? Check me out, or not ¯_(ツ)_/¯",
};

export default async function Index() {
  const projects = await getProjects();
  return (
    <>
      <article>
        <div className={styles.headerBackground}>
          <header className={styles.header}>
            <h1 className={styles.title}>
              Hi, I&apos;m{" "}
              <Link
                href="https://github.com/ronituohino"
                className={styles.roni}
                target="_blank"
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
                label="My github profile"
                href="https://github.com/ronituohino"
                icon={<GitHub title="" />}
              />

              <LinkIcon
                label="My linkedin profile"
                href="https://www.linkedin.com/in/ronituohino/"
                icon={<LinkedIn title="" />}
              />

              <LinkIcon
                label="Send me an email"
                href="mailto:tuohinoroni@gmail.com"
                icon={<Email title="" />}
              />
            </div>

            <div className={styles.arrows}>
              <div className={styles.projectsArrow}>
                <p>See my projects!</p>
                <Arrow title="" />
              </div>

              <div className={styles.contactsArrow}>
                <Arrow title="" />
                <p>Then hire me!</p>
              </div>
            </div>
          </header>
        </div>

        <div className={styles.projectsBackground}>
          <section id="projects" className={styles.projects}>
            <h2>Cool stuff that I&apos;ve worked on</h2>
            <h3 className={styles.coldStart}>
              *Demos may have slow load times due to cold starts
            </h3>
            <ul className={styles.projectsList}>
              {projects.map((project) => {
                return (
                  <li key={project.id} className={styles.project}>
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
                        variant="box"
                        text={project.btn.text}
                        href={project.btn.href}
                        className={styles.demoButton}
                        openInNewTab
                        fontSize="22px"
                        textY="72%"
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </article>
    </>
  );
}
