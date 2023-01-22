import { ReactNode, useEffect } from "react";

import styles from "./Button.module.css";

type ButtonProps = {
  color: string;
  children?: ReactNode;
};

export function Button({ color, children }: ButtonProps) {
  return (
    <button
      className={styles.button}
      style={{
        color,
        textShadow: `0px 0px 10px ${color}`,
        border: `2px solid ${color}`,
        boxShadow: `0px 0px 10px ${color},
    0px 0px 10px inset ${color}`,
      }}
    >
      {children}
    </button>
  );
}
