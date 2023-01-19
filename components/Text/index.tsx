import type { ReactNode } from "react";
import styles from "./Text.module.css";

type TextProps = {
  children: ReactNode;
};

export function Text({ children }: TextProps) {
  return <span className={styles.text}>{children}</span>;
}
