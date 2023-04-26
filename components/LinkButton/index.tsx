import { ButtonFrameKeys, buttonFrames } from "../ButtonFrame";

import Link from "next/link";

import styles from "./LinkButton.module.css";

type LinkButtonProps = {
  text: string;
  href: string;
  variant: ButtonFrameKeys;
  disabled?: boolean;
  className?: string;
};

export function LinkButton({
  text,
  href,
  variant,
  disabled,
  className,
}: LinkButtonProps) {
  const textElement = (
    <text
      x="50%"
      y="66%"
      dominantBaseline="middle"
      textAnchor="middle"
      fill="var(--svg-stroke-color)"
      fontSize="32px"
    >
      {text}
    </text>
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={buttonFrames[variant][1].viewBox}
      className={`${disabled ? styles.disabledButton : styles.enabledButton} ${
        className || ""
      }`}
    >
      {disabled ? (
        <>
          {buttonFrames[variant][0]}
          {textElement}
        </>
      ) : (
        <Link href={href}>
          {buttonFrames[variant][0]}
          {textElement}
        </Link>
      )}
    </svg>
  );
}
