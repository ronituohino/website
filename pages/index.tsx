import type { FrameKeys } from "../components/Frame";

import Head from "next/head";
import { Title } from "../components/Title";
import { LinkCard } from "../components/LinkCard";

import { LinkIcon } from "../components/LinkIcon";
import { Download } from "../components/SVG";
import { GitHub } from "../components/SVG";
import { LinkedIn } from "../components/SVG";
import { Email } from "../components/SVG";

import styles from "./index.module.css";

export type Project = {
  id: string;
  name: string;
  urlName: string;
  img: {
    src: string;
    width: string;
    frame: FrameKeys;
  };
};

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
          <Title className={styles.title} />

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

// Run on build, loads projects from public folder at /public/api/projects.json
import fsPromises from "fs/promises";
import path from "path";
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "public", "api", "projects.json");
  const fileBuffer = await fsPromises.readFile(filePath);
  const projects = JSON.parse(fileBuffer.toString());

  return {
    props: {
      projects,
    },
  };
}
