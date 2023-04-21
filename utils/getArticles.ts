import type { FrameKeys } from "../components/Frame";

export type Article = {
  id: string;
  name: string;
  urlName: string;
  img: {
    src: string;
    width?: string;
    height?: string;
    xOffset?: string;
    yOffset?: string;
    frame: FrameKeys;
  };
};

import fsPromises from "fs/promises";
import path from "path";
export async function getArticles() {
  const articlesPath = path.join(
    process.cwd(),
    "public",
    "api",
    "articles.json"
  );
  const articlesBuffer = await fsPromises.readFile(articlesPath);
  return JSON.parse(articlesBuffer.toString()) as [Article];
}
