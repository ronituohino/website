import type { IconProps } from "../SVG";
import type { ReactNode } from "react";

import type { FrameKeys } from "../Frame";
import { frames } from "../Frame";

type PictureProps = IconProps & {
  frame: FrameKeys;
  children?: ReactNode;
  src?: string;
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
  const frameData = frames[frame];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
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
  );
}
