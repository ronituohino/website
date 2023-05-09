import { ReactNode } from "react";
import Link from "next/link";

import styles from "./LinkIcon.module.css";

type LinkIconProps = {
  href: string;
  icon: ReactNode;
  rightText?: string;
  className?: string;
};

export function LinkIcon({ href, icon, rightText, className }: LinkIconProps) {
  return (
    <Link
      target="_blank"
      href={href}
      className={`${styles.link} ${className || ""}`}
    >
      {icon}
      {rightText}
    </Link>
  );
}
