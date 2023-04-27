import { ReactNode } from "react";
import Link from "next/link";

import styles from "./LinkIcon.module.css";

type LinkIconProps = {
  href: string;
  openInNewTab?: boolean;
  icon: ReactNode;
  rightText?: string;
  className?: string;
};

export function LinkIcon({
  href,
  openInNewTab,
  icon,
  rightText,
  className,
}: LinkIconProps) {
  return (
    <Link
      target={openInNewTab ? "_blank" : "_self"}
      href={href}
      className={`${styles.link} ${className || ""}`}
    >
      {icon}
      {rightText}
    </Link>
  );
}
