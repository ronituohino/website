/* ButtonFrames are like PictureFrames but they do not support images with a clipPath */

import type { ReactNode } from "react";

import { Box, boxData } from "./Box";
import { ExtraLarge, extraLargeData } from "./ExtraLarge";
import { Large, largeData } from "./Large";
import { Medium, mediumData } from "./Medium";
import { Small, smallData } from "./Small";

type ButtonFrameType = [ReactNode, { viewBox: string }];

export const buttonFrames = {
  box: [Box, boxData] satisfies ButtonFrameType,
  extraLarge: [ExtraLarge, extraLargeData] satisfies ButtonFrameType,
  large: [Large, largeData] satisfies ButtonFrameType,
  medium: [Medium, mediumData] satisfies ButtonFrameType,
  small: [Small, smallData] satisfies ButtonFrameType,
};

export type ButtonFrameKeys = keyof typeof buttonFrames;
