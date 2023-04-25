import type { PictureFrameKeys } from "../components/PictureFrame";

export type Blog = {
  id: string;
  name: string;
  urlName: string;
  img: {
    src: string;
    width?: string;
    height?: string;
    xOffset?: string;
    yOffset?: string;
    frame: PictureFrameKeys;
  };
};

import fsPromises from "fs/promises";
import path from "path";
export async function getBlogs() {
  const blogsPath = path.join(process.cwd(), "public", "api", "blogs.json");
  const blogsBuffer = await fsPromises.readFile(blogsPath);
  return JSON.parse(blogsBuffer.toString()) as [Blog];
}
