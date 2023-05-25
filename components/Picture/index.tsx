import type { IconProps } from "../SVG";
import type { ReactNode } from "react";

import type { PictureFrameKeys } from "../PictureFrame";
import { pictureFrames } from "../PictureFrame";
import cn from "classnames";
import Link from "next/link";

import styles from "./Picture.module.css";

type PictureProps = IconProps & {
  frame: PictureFrameKeys;
  children?: ReactNode;
  src: string;
  imgWidth?: string;
  imgHeight?: string;
  imgXOffset?: string;
  imgYOffset?: string;
};

export function Picture({
  title,
  className,
  width,
  height,
  frame,
  children,
  src,
  imgWidth,
  imgHeight,
  imgXOffset,
  imgYOffset,
}: PictureProps) {
  const frameData = pictureFrames[frame];
  return (
    <Link className={cn(styles.link, className)} target="_blank" href={src}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={styles.svg}
        viewBox={frameData[1].viewBox}
      >
        <title>{title}</title>
        {frameData[0]}
        <image
          href={src}
          width={imgWidth}
          height={imgHeight}
          x={imgXOffset}
          y={imgYOffset}
          clipPath={`url(#${frameData[1].clipPathId}`}
        />
        {children}
      </svg>
    </Link>
  );
}
