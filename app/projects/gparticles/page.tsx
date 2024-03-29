import { Picture } from "../../../components/Picture";

import { LinkIcon } from "../../../components/LinkIcon";
import { GitHub, GooglePlay } from "../../../components/SVG";
import Head from "next/head";

import styles from "./GParticles.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GParticles - Roni Tuohino",
  description: "Project overview of GParticles, a mobile art project.",
};

export default function GParticles() {
  return (
    <div className={styles.background}>
      <div className={styles.backgroundLeft} />
      <div className={styles.backgroundRight} />
      <article className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>GParticles</h1>

          <ul className={styles.links}>
            <li>
              <LinkIcon
                label="Project GitHub"
                href="https://github.com/ronituohino/GParticles"
                icon={<GitHub title="" />}
                className={styles.githubLink}
              />
            </li>
            <li>
              <LinkIcon
                label="Project on Google Play"
                href="https://play.google.com/store/apps/details?id=com.Tuohino.GParticles"
                icon={<GooglePlay title="" />}
                className={styles.googleLink}
              />
            </li>
          </ul>

          <p>
            A really quick Unity project. The main idea was to achieve some cool
            effects with particles and physics. For some reason this kind of
            took off in the Play Store. I tried to optimize it by moving all the
            calculations to the GPU but I had some other stuff come up while
            trying to learn compute shaders. I guess now I could just ask
            ChatGPT to write the shader lol.
          </p>
        </header>

        <div className={styles.pics}>
          <Picture
            title="Purple particles circulating around multiple points the user is pressing on."
            width="300"
            imgWidth="110"
            frame="phone1"
            src="/pictures/projects/gparticles/pinkishpurple.jpg"
          />
          <Picture
            title="Yellow and green particles shooting off into different directions."
            width="300"
            imgWidth="110"
            frame="phone2"
            src="/pictures/projects/gparticles/yellowishgreen.jpg"
          />
        </div>
      </article>
    </div>
  );
}
