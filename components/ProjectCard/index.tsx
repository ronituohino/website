import Link from "next/link";
import type { FrameKeys } from "../Frame";
import { frames } from "../Frame";

import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  projectName: string;
  href: string;
  frame: FrameKeys;
  src?: string;
  width?: string;
  height?: string;
  imgWidth?: string;
  imgHeight?: string;
  imgXOffset?: string;
  imgYOffset?: string;
  className?: string;
};

export function ProjectCard({
  projectName,
  href,
  frame,
  src,
  imgWidth,
  imgHeight,
  imgXOffset,
  imgYOffset,
  className,
}: ProjectCardProps) {
  const frameData = frames[frame];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles.card} ${className || ""}`}
      viewBox={frameData[1].viewBox}
    >
      <Link href={href}>
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
          {projectName}
        </text>
      </Link>
    </svg>
  );
}
