import type { IconProps } from "../SVG";
import { Board } from "./Board";
import { Paper } from "./Paper";

const frames = {
  paper: Paper(),
  board: Board(),
};

type PictureProps = IconProps & {
  frame: keyof typeof frames;
  href: string;
  imgWidth?: number;
  imgHeight?: number;
  imgXOffset?: number;
  imgYOffset?: number;
};

export function Picture({
  title,
  className,
  width,
  height,
  frame,
  href,
  imgWidth,
  imgHeight,
  imgXOffset,
  imgYOffset,
}: PictureProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 84.6 103.2"
    >
      <title>{title}</title>
      {frames[frame]}
      <image
        href={href}
        width={imgWidth}
        height={imgHeight}
        x={imgXOffset}
        y={imgYOffset}
        clipPath={`url(#${frame}FrameClip)`}
      />
    </svg>
  );
}

/*

*/
