import Link from "next/link";
import { ReactLogo, NodeJS, GraphQL, MongoDB } from "../../SVG";
import { Picture } from "../../Picture";
import { InlineLink } from "../../InlineLink";

import storepageImage from "./storepage.png";
import orderingImage from "./ordering.png";

import styles from "./Recom.module.css";

type RecomProps = {
  className?: string;
};

export function Recom({ className }: RecomProps) {
  return (
    <article className={`${styles.container}${className || ""}`}>
      <div>
        <h3>Recom - Online shopping platform</h3>

        <div className={styles.description}>
          Final project for a{" "}
          <InlineLink href="https://fullstackopen.com/en/">
            Full stack web development course
          </InlineLink>
          , and my first major web project. It consists of four parts: a store
          app, a backend server, a database, and an admin app. The user can add
          items from the store into their cart, and go through a full checkout
          process. The store can be managed through the admin application.
        </div>
      </div>

      <div className={styles.right}>
        <Picture
          title="Ordering page where the user is selecting a postal delivery point."
          width="100"
          imgWidth="150"
          frame="paper"
          href={orderingImage.src}
        />
        <Picture
          title="Storepage for a pair of sneakers with multiple images of the sneakers."
          width="300"
          imgXOffset="-10"
          imgWidth="180"
          frame="paper"
          href={storepageImage.src}
        />

        <Link href="https://github.com/ronituohino/recom">GitHub here </Link>
        <Link href="https://recom-pnxd5duksa-lz.a.run.app">Livelink here</Link>
      </div>

      <div className={styles.technologies}>
        <MongoDB title="MongoDB" width="200" />
        <GraphQL title="GraphQL" width="200" />
        <NodeJS title="NodeJS" width="200" />
        <ReactLogo title="React" width="200" />
      </div>
    </article>
  );
}
