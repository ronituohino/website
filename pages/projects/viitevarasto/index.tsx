import { Picture } from "../../../components/Picture";
import { LinkButton } from "../../../components/LinkButton";
import { LinkIcon } from "../../../components/LinkIcon";
import { GitHub } from "../../../components/SVG";
import styles from "./Viitevarasto.module.css";
import Head from "next/head";
import { InlineLink } from "../../../components/InlineLink";

export default function Viitevarasto() {
  return (
    <>
      <Head>
        <title>Viitevarasto - Roni Tuohino</title>
        <meta
          name="description"
          content="Project overview of Viitevarasto, a references management system."
        />
      </Head>

      <div className={styles.background}>
        <article className={styles.container}>
          <header className={styles.header}>
            <div className={styles.title}>
              <h1>Viitevarasto</h1>
              <h5>*The app is only in Finnish</h5>
            </div>

            <ul className={styles.links}>
              <li>
                <LinkIcon
                  label="Project GitHub"
                  href="https://github.com/Perttu-Kangas/ohtu-mini"
                  icon={<GitHub title="" />}
                  className={styles.githubLink}
                />
              </li>
              <li>
                <LinkButton
                  href="https://viitevarasto.fly.dev/"
                  text="Demo"
                  variant="large"
                  className={styles.demoLink}
                />
              </li>
            </ul>

            <p>
              This is a university group project for a software production
              course. The idea is that the user can upload their BibTeX
              references onto the application and select which ones to compile
              into a references file for whatever document they are working on.
              This avoids having to manually manage the BibTeX file and updating
              the references throughout the document, and it also makes adding
              new references easier.
            </p>
          </header>

          <div className={styles.pics}>
            <Picture
              title="Viitevarasto main menu, with a list of added references and controls for manipulating references."
              imgWidth="270"
              width="500"
              frame="large"
              src="/pictures/projects/viitevarasto/menu.png"
            />
            <Picture
              title="Viitevarasto reference adding menu, with a form for adding a reference into the application."
              imgWidth="240"
              width="500"
              frame="large"
              src="/pictures/projects/viitevarasto/adding.png"
            />
          </div>

          <section className={styles.techAndDesignSection}>
            <h2>Tech and design</h2>
            <p>
              The app is built using{" "}
              <InlineLink href="https://flask.palletsprojects.com/en/2.3.x/">
                Flask
              </InlineLink>{" "}
              and Python. Deployment is automated via GitHub Actions, and the
              app is pushed in a Docker container to{" "}
              <InlineLink href="https://fly.io/">fly.io</InlineLink>. The app
              contains automation tests and they are run as part of the
              deployment pipeline.
            </p>
            <br />
            <p>
              I was responsible for initial project setup and design. All of the
              CSS is{" "}
              <InlineLink href="https://github.com/Perttu-Kangas/ohtu-mini/tree/main/static/css">
                in 2 files
              </InlineLink>{" "}
              lol, but that&apos;s mostly because the time requirements for this
              project were quite tight. The overall look is quite clean and very
              usable.
            </p>
          </section>

          <section className={styles.creditsSection}>
            <h2>Credits</h2>
            <p>
              Huge credits for the rest of the team for amazing work on the
              project:
              <ul>
                <li>
                  <InlineLink href="https://github.com/DeeCaaD">
                    @DeeCaaD
                  </InlineLink>
                  {", "}
                  <InlineLink href="https://github.com/joonas-a">
                    @joonas-a
                  </InlineLink>
                  {", "}
                  <InlineLink href="https://github.com/Sidorow">
                    @Sidorow
                  </InlineLink>
                  {", "}
                  <InlineLink href="https://github.com/tikuisma">
                    @tikuisma
                  </InlineLink>
                </li>
              </ul>
            </p>
          </section>
        </article>
      </div>
    </>
  );
}
