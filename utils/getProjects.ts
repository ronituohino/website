import type { FrameKeys } from "../components/Frame";

export type Project = {
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
export async function getProjects() {
  const projectsPath = path.join(
    process.cwd(),
    "public",
    "api",
    "projects.json"
  );
  const projectsBuffer = await fsPromises.readFile(projectsPath);
  return JSON.parse(projectsBuffer.toString()) as [Project];
}
