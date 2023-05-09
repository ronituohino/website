import { ButtonFrameKeys, buttonFrames } from "../ButtonFrame";

import Link from "next/link";

import styles from "./LinkButton.module.css";

type LinkButtonProps = {
  text: string;
  href: string;
  variant: ButtonFrameKeys;
  className?: string;
};

export function LinkButton({
  text,
  href,
  variant,
  className,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`${styles.linkButton} ${className || ""}`}
      target="_blank"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={buttonFrames[variant][1].viewBox}
      >
        {buttonFrames[variant][0]}
        <text
          x="50%"
          y="55%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="var(--svg-stroke-color)"
          fontSize="32px"
        >
          {text}
        </text>
      </svg>
    </Link>
  );
}
