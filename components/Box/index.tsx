import type { ReactNode } from "react";

import styles from "./Box.module.css";

type BoxProps = {
  color: string;
  children?: ReactNode;
};

export function Box({ color, children }: BoxProps) {
  return (
    <div
      className={styles.box}
      style={{
        color,
        textShadow: `0px 0px 10px ${color}`,
        border: `2px solid ${color}`,
        boxShadow: `0px 0px 10px ${color},
    0px 0px 10px inset ${color}`,
      }}
    >
      {children}
    </div>
  );
}
