import { InlineLink } from "../InlineLink";

import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.footerBackground}>
      <footer className={styles.footer}>
        Made by{" "}
        <InlineLink href="https://github.com/ronituohino">me</InlineLink>, using{" "}
        <InlineLink href="https://nextjs.org/">next.js</InlineLink>.
      </footer>
    </div>
  );
}
