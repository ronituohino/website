/* Frames are used with components like Pictures and LinkCards*/
/* Frames contain an SVG with a clipPath for a regular image to be put into */

import type { ReactNode } from "react";

import { Box1, box1Data } from "./Box1";
import { Box2, box2Data } from "./Box2";
import { RoundBox1, roundBox1Data } from "./RoundBox1";
import { RoundBox2, roundBox2Data } from "./RoundBox2";

type PictureFrameType = [ReactNode, { viewBox: string; clipPathId: string }];

export const pictureFrames = {
  box1: [Box1, box1Data] satisfies PictureFrameType,
  box2: [Box2, box2Data] satisfies PictureFrameType,
  roundBox1: [RoundBox1, roundBox1Data] satisfies PictureFrameType,
  roundBox2: [RoundBox2, roundBox2Data] satisfies PictureFrameType,
};

export type PictureFrameKeys = keyof typeof pictureFrames;
