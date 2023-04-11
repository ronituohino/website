import type { ReactNode } from "react";
import type { IconProps } from "../SVG";
import { Box1 } from "./Box1";
import { Box2 } from "./Box2";
import { Phone } from "./Phone";
import { RoundBox1 } from "./RoundBox1";
import { RoundBox2 } from "./RoundBox2";

export type FrameType = {
  viewBox: string;
  element: ReactNode;
};

const frames = {
  box1: Box1() satisfies FrameType,
  box2: Box2() satisfies FrameType,
  roundBox1: RoundBox1() satisfies FrameType,
  roundBox2: RoundBox2() satisfies FrameType,
  phone: Phone() satisfies FrameType,
};

export type FrameKeys = keyof typeof frames;

type PictureProps = IconProps & {
  frame: FrameKeys;
  src: string;
  href?: string;
  imgWidth?: string;
  imgHeight?: string;
  imgXOffset?: string;
  imgYOffset?: string;
  children?: ReactNode;
};

export function Picture({
  title,
  className,
  width,
  height,
  frame,
  src,
  href,
  imgWidth,
  imgHeight,
  imgXOffset,
  imgYOffset,
  children,
}: PictureProps) {
  const frameData = frames[frame];
  const coreElements = (
    <>
      {frameData.element}
      <image
        href={src}
        width={imgWidth}
        height={imgHeight}
        x={imgXOffset}
        y={imgYOffset}
        clipPath={`url(#${frame}FrameClip)`}
      />
      {children}
    </>
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox={frameData.viewBox}
    >
      <title>{title}</title>
      {href ? <a href={href}>{coreElements}</a> : <>{coreElements}</>}
    </svg>
  );
}
