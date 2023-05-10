import type { PictureFrameKeys } from "../PictureFrame";
import type { ReactNode } from "react";

import Link from "next/link";

import { pictureFrames } from "../PictureFrame";

import styles from "./LinkCard.module.css";

type LinkCardProps = {
  title: string;
  href: string;
  frame: PictureFrameKeys;
  src?: string;
  width?: string;
  height?: string;
  imgWidth?: string;
  imgHeight?: string;
  imgXOffset?: string;
  imgYOffset?: string;
  className?: string;
};

export function LinkCard({
  title,
  href,
  frame,
  src,
  imgWidth,
  imgHeight,
  imgXOffset,
  imgYOffset,
  className,
}: LinkCardProps) {
  const frameData = pictureFrames[frame];
  return (
    <Link
      href={href}
      aria-label={title}
      className={`${styles.card} ${className || ""}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={frameData[1].viewBox}>
        {frameData[0]}
        <image
          href={src}
          width={imgWidth}
          height={imgHeight}
          x={imgXOffset}
          y={imgYOffset}
          clipPath={`url(#${frameData[1].clipPathId}`}
        />
        <rect
          width="100%"
          height="100%"
          clipPath={`url(#${frameData[1].clipPathId}`}
          className={styles.backdrop}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className={styles.title}
        >
          {title}
        </text>
      </svg>
    </Link>
  );
}
