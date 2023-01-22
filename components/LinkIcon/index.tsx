import { ReactNode } from "react";
import Link from "next/link";

import styles from "./LinkIcon.module.css";

type LinkIconProps = {
  href: string;
  openInNewTab?: boolean;
  icon: ReactNode;
};

export function LinkIcon({ href, openInNewTab, icon }: LinkIconProps) {
  return (
    <Link
      target={openInNewTab ? "_blank" : "_self"}
      href={href}
      className={styles.link}
    >
      {icon}
    </Link>
  );
}
