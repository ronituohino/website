import { BsGithub } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";

import Link from "next/link";
import Image from "next/image";

import styles from "./Header.module.css";
import { LinkIcon } from "../LinkIcon";

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
      <Link href="/blog">Blog</Link>

      <LinkIcon
        href="https://github.com/ronituohino"
        openInNewTab
        icon={<BsGithub style={{ width: "32px", height: "32px" }} />}
      />

      <LinkIcon
        href="https://www.linkedin.com/in/ronituohino/"
        openInNewTab
        icon={<CiLinkedin style={{ width: "40px", height: "40px" }} />}
      />

      <LinkIcon
        href="mailto:tuohinoroni@gmail.com"
        icon={<MdOutlineMail style={{ width: "42px", height: "42px" }} />}
      />
    </header>
  );
}
