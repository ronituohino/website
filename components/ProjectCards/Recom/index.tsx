import type { ProjectCardProps } from "..";
import { Picture } from "../../Picture";

import storepageImage from "./storepage.png";

export function Recom({ className }: ProjectCardProps) {
  return (
    <Picture
      title="Storepage for a pair of sneakers with multiple images of the sneakers."
      href={storepageImage.src}
      frame="roundBox2"
    ></Picture>
  );
}
