import type { ReactNode } from "react";
import styles from "./InlineLink.module.css";
import Link from "next/link";

type InlineLinkProps = {
  children: ReactNode;
  href: string;
};

export function InlineLink({ children, href }: InlineLinkProps) {
  return (
    <Link href={href} target="_blank" className={styles.inlineLink}>
      {children}
    </Link>
  );
}
