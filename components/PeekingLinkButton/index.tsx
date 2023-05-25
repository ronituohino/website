import { ButtonFrameKeys, buttonFrames } from "../ButtonFrame";
import cn from "classnames";
import Link from "next/link";

import styles from "./PeekingLinkButton.module.css";

type PeekingLinkButtonProps = {
  text: string;
  href: string;
  variant: ButtonFrameKeys;
  disabled?: boolean;
  className?: string;
  openInNewTab?: boolean;
  fontSize?: string;
  textX?: string;
  textY?: string;
};

export function PeekingLinkButton({
  text,
  href,
  variant,
  disabled,
  className,
  openInNewTab,
  fontSize,
  textX,
  textY,
}: PeekingLinkButtonProps) {
  return (
    <>
      <Link
        href={href}
        target={openInNewTab ? "_blank" : "_self"}
        aria-label={text}
        tabIndex={disabled ? -1 : 0}
        className={cn(
          disabled ? styles.disabledButton : styles.enabledButton,
          className
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={buttonFrames[variant][1].viewBox}
        >
          {buttonFrames[variant][0]}
          <text
            x={textX ? textX : "50%"}
            y={textY ? textY : "66%"}
            dominantBaseline="middle"
            textAnchor="middle"
            fill="var(--svg-stroke-color)"
            fontSize={fontSize ? fontSize : "32px"}
          >
            {text}
          </text>
        </svg>
      </Link>
    </>
  );
}
