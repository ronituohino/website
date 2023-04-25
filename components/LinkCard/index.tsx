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
  children?: ReactNode;
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
  children,
}: LinkCardProps) {
  const frameData = pictureFrames[frame];
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${styles.card} ${className || ""}`}
        viewBox={frameData[1].viewBox}
      >
        {children}
        <Link href={href} className={styles.link}>
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
        </Link>
      </svg>
    </>
  );
}
