import { Picture } from "../Picture";
import type { FrameKeys } from "../Picture";

import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  projectName: string;
  projectImageSrc: string;
  projectImageWidth: string;
  href: string;
  frame: FrameKeys;
  className?: string;
};

export function ProjectCard({
  projectName,
  projectImageSrc,
  projectImageWidth,
  href,
  frame,
  className,
}: ProjectCardProps) {
  return (
    <Picture
      title=""
      src={projectImageSrc}
      href={href}
      frame={frame}
      imgWidth={projectImageWidth}
      className={styles.card}
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        className={styles.title}
      >
        {projectName}
      </text>
    </Picture>
  );
}
