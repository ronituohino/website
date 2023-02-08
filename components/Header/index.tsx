import Link from "next/link";
import Image from "next/image";

import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.profileContainer}>
        <Image
          src="/profile.svg"
          width="48"
          height="48"
          alt="my profile picture"
          className={styles.picture}
        />
        <span>Roni Tuohino</span>
      </Link>
      <Link className={styles.blogLink} href="/blog">
        Blog
      </Link>
    </header>
  );
}
