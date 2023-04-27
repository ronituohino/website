import Link from "next/link";
import { Picture } from "../../../components/Picture";
import { InlineLink } from "../../../components/InlineLink";

import styles from "./Recom.module.css";

export default function Recom() {
  return (
    <div className={styles.background}>
      <article className={styles.container}>
        <div className={styles.left}>
          <Picture
            title="Ordering page where the user is selecting a postal delivery point."
            width="100%"
            imgWidth="150"
            frame="box1"
            src="/pictures/recom-ordering.png"
          />
          <Picture
            title="Storepage for a pair of sneakers with multiple images of the sneakers."
            width="100%"
            imgXOffset="-50"
            imgWidth="170"
            frame="box1"
            src="/pictures/recom-storepage.png"
          />
        </div>

        <div className={styles.right}>
          <h1>Recom - Online shopping platform</h1>

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

          <div className={styles.links}>
            <Link href="https://github.com/ronituohino/recom">GitHub here</Link>
            <Link href="https://recom-pnxd5duksa-lz.a.run.app">
              Livelink here
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
