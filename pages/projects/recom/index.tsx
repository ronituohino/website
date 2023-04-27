import { Picture } from "../../../components/Picture";
import { InlineLink } from "../../../components/InlineLink";

import styles from "./Recom.module.css";
import { LinkButton } from "../../../components/LinkButton";
import { LinkIcon } from "../../../components/LinkIcon";
import { GitHub } from "../../../components/SVG";

export default function Recom() {
  return (
    <div className={styles.background}>
      <article className={styles.container}>
        <h1>Recom - Online shopping platform</h1>

        <li className={styles.links}>
          <LinkIcon
            href="https://github.com/ronituohino/recom"
            icon={<GitHub title="" />}
            className={styles.githubLink}
          />
          <LinkButton
            href="https://recom-pnxd5duksa-lz.a.run.app"
            text="Demo"
            variant="large"
            className={styles.demoLink}
          />
        </li>

        <div className={styles.description}>
          Final project for a{" "}
          <InlineLink href="https://fullstackopen.com/en/">
            Full stack web development course
          </InlineLink>
          , and my first major web project. It consists of a store app, a
          backend server, a database, and an admin app. The user can add items
          from the store into their cart, and go through a full checkout
          process. The store can be managed through the admin application.
        </div>

        <div className={styles.firstPictures}>
          <Picture
            title="Ordering page where the user is selecting a postal delivery point."
            imgWidth="150"
            frame="box1"
            src="/pictures/projects/recom-ordering.png"
          />
          <Picture
            title="Storepage for a pair of sneakers with multiple images of the sneakers."
            imgXOffset="-50"
            imgWidth="170"
            frame="box1"
            src="/pictures/projects/recom-storepage.png"
          />
        </div>
      </article>
    </div>
  );
}
