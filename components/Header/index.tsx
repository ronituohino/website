import Link from "next/link";
import Image from "next/image";

import { Profile } from "../SVG";

import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.profileContainer}>
        <Profile
          width={48}
          height={48}
          title="my profile picture"
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
