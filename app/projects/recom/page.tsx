import { Picture } from "../../../components/Picture";
import { InlineLink } from "../../../components/InlineLink";

import { LinkButton } from "../../../components/LinkButton";
import { LinkIcon } from "../../../components/LinkIcon";
import { GitHub } from "../../../components/SVG";

import styles from "./Recom.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recom - Roni Tuohino",
  description: "Project overview of Recom, an online shopping platform.",
};

export default function Recom() {
  return (
    <>
      <div className={styles.background}>
        <article className={styles.container}>
          <header className={styles.header}>
            <h1 className={styles.title}>
              Recom, &quot;React e-commerce&quot;
            </h1>

            <ul className={styles.links}>
              <li>
                <LinkIcon
                  label="Project GitHub"
                  href="https://github.com/ronituohino/recom"
                  icon={<GitHub title="" />}
                  className={styles.githubLink}
                />
              </li>
              <li>
                <LinkButton
                  href="https://recom-pnxd5duksa-lz.a.run.app"
                  text="Demo"
                  variant="large"
                  className={styles.demoLink}
                />
              </li>
            </ul>

            <p>
              This is my final project for a{" "}
              <InlineLink href="https://fullstackopen.com/en/">
                Fullstack web development course
              </InlineLink>
              , and my first major web project. It consists of a store app, a
              backend server, a database, and an admin app. The user can add
              items from the store into their cart, and go through a full
              checkout process. The store can be managed through the admin
              application. The entire app (and dev environment) is
              containerized.
            </p>
          </header>

          <div className={styles.pics}>
            <Picture
              title="Category page for shoes. Sneakers and sandals are listed."
              imgXOffset="-50"
              imgWidth="170"
              frame="box1"
              src="/pictures/projects/recom/browsing.png"
            />
            <Picture
              title="Storepage for a pair of sneakers with multiple images of the sneakers."
              imgXOffset="-50"
              imgWidth="170"
              frame="box2"
              src="/pictures/projects/recom/storepage.png"
            />
            <Picture
              title="Ordering page where the user is selecting a postal delivery point."
              imgWidth="150"
              frame="roundBox1"
              src="/pictures/projects/recom/checkout.png"
            />
          </div>

          <section className={styles.storeSection}>
            <h2>The store</h2>
            <p>
              The style is this cartoonish &quot;hand-drawn&quot; look with all
              of the content in rounded and shadowed boxes. I decided to go with{" "}
              <InlineLink href="https://mui.com/">MUI</InlineLink> as the
              frontend framework, because at the time I wasn&apos;t comfortable
              with pure CSS. MUI also looked really clean and proved to be easy
              to use. The store supports multiple languages (Finnish & English).
              The store browser supports pagination, but I don&apos;t have
              enough items on sale for it to be apparent.
            </p>
          </section>

          <section className={styles.adminSection}>
            <h2>The admin application</h2>
            <p>
              The admin app uses the same tech as the store itself, but
              doesn&apos;t have as much focus on style. Admins can
              add/modify/delete items, categories and accounts.
            </p>
            <div className={styles.adminPics}>
              <Picture
                title="Admin tools with product modification modal."
                width="350"
                imgWidth="190"
                frame="roundBox1"
                src="/pictures/projects/recom/adminProducts.png"
              />
              <Picture
                title="Admin tools with cateogry modification modal."
                width="400"
                imgWidth="130"
                imgXOffset="-20"
                imgYOffset="-20"
                frame="roundBox2"
                src="/pictures/projects/recom/adminCategories.png"
              />
            </div>
          </section>

          <section className={styles.backendSection}>
            <h2>The backend</h2>
            <p>
              It&apos;s a{" "}
              <InlineLink href="https://nodejs.org/en">node</InlineLink> +{" "}
              <InlineLink href="https://expressjs.com/">express</InlineLink>{" "}
              setup. The backend uses{" "}
              <InlineLink href="https://graphql.org/">GraphQL</InlineLink> for
              communication and stores all data in{" "}
              <InlineLink href="https://www.mongodb.com/">MongoDB</InlineLink>.
              Authentication is implemented with{" "}
              <InlineLink href="https://en.wikipedia.org/wiki/JSON_Web_Token">
                JWTs
              </InlineLink>
              .
            </p>
          </section>

          <section className={styles.conclusionSection}>
            <h2>Conclusions</h2>
            <p>
              This project required{" "}
              <InlineLink href="https://github.com/ronituohino/recom/blob/main/project-hourbook.xlsx">
                way more time
              </InlineLink>{" "}
              than I initially expected. I would say the biggest time-sinks were
              trying to containerize the app the first time (when I didn&apos;t
              have much experience with Docker), and figuring out file uploads
              to the server and syncing them when starting a new instance.
            </p>
            <br />
            <p>
              Overall I&apos;m very happy with how the backend works, but the
              frontend could use a little touch-up. The whole project isn&apos;t
              really &quot;production ready&quot;, but as a hobby project I
              think it&apos;s great!
            </p>
          </section>
        </article>
      </div>
    </>
  );
}
