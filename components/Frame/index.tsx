/* Frames are used with components like Pictures and ProjectCards*/

import type { ReactNode } from "react";

import { Box1, box1Data } from "./Box1";
import { Box2, box2Data } from "../Frame/Box2";
import { RoundBox1, roundBox1Data } from "./RoundBox1";
import { RoundBox2, roundBox2Data } from "./RoundBox2";

type FrameType = [ReactNode, { viewBox: string; clipPathId: string }];

export const frames = {
  box1: [Box1(), box1Data] satisfies FrameType,
  box2: [Box2(), box2Data] satisfies FrameType,
  roundBox1: [RoundBox1(), roundBox1Data] satisfies FrameType,
  roundBox2: [RoundBox2(), roundBox2Data] satisfies FrameType,
};

export type FrameKeys = keyof typeof frames;
