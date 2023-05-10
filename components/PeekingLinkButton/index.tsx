import { ButtonFrameKeys, buttonFrames } from "../ButtonFrame";

import Link from "next/link";

import styles from "./PeekingLinkButton.module.css";

type PeekingLinkButtonProps = {
  text: string;
  href: string;
  variant: ButtonFrameKeys;
  disabled?: boolean;
  className?: string;
  openInNewTab?: boolean;
};

export function PeekingLinkButton({
  text,
  href,
  variant,
  disabled,
  className,
  openInNewTab,
}: PeekingLinkButtonProps) {
  const innerElement = (
    <>
      {buttonFrames[variant][0]}
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
    </>
  );

  return (
    <>
      {disabled ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={buttonFrames[variant][1].viewBox}
          className={`${
            disabled ? styles.disabledButton : styles.enabledButton
          } ${className || ""}`}
        >
          {innerElement}
        </svg>
      ) : (
        <Link
          href={href}
          target={openInNewTab ? "_blank" : "_self"}
          aria-label={text}
          className={`${
            disabled ? styles.disabledButton : styles.enabledButton
          } ${className || ""}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={buttonFrames[variant][1].viewBox}
          >
            {innerElement}
          </svg>
        </Link>
      )}
    </>
  );
}
