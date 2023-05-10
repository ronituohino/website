import { ReactNode } from "react";
import Link from "next/link";

import styles from "./LinkIcon.module.css";

type LinkIconProps = {
  href: string;
  icon: ReactNode;
  label: string;
  className?: string;
};

export function LinkIcon({ href, icon, label, className }: LinkIconProps) {
  return (
    <Link
      target="_blank"
      href={href}
      aria-label={label}
      className={`${styles.link} ${className || ""}`}
    >
      {icon}
    </Link>
  );
}
