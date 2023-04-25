import Link from "next/link";
import styles from "./CV.module.css";

import { buttonFrames } from "../ButtonFrame";

type CVProps = {
  width?: string;
};

export function CV({ width }: CVProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      viewBox={buttonFrames.extraLarge[1].viewBox}
    >
      <Link href="/cv.pdf" className={styles.button}>
        {buttonFrames.extraLarge[0]}
        <text
          x="49%"
          y="52%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="var(--svg-stroke-color)"
        >
          Curriculum Vitae
        </text>
      </Link>
      <path
        fill="var(--svg-stroke-color)"
        d="M6 79.2c-8-2.8 4.6-10.2 8.3-10.7 5.5 3-5.3 10.2-8.4 10.7zM220 18.7c-7-4.8 13.7-17.5 10.2-7.8-3.2 2.6-5.4 8.3-10.2 7.8zM24.6 17.5c-11 1.2-3-18.9.4-6.9-.6 2.6 4.3 5.9-.4 6.9zM246.2 36c-9.2-4.5 7.2-8.5 12-7.3 4 5.2-9.2 6.8-12 7.3zm-235 .3c-5.6 1.2-16-9.5-4.7-6.9 3 2.1 9 3 4.7 6.9zm-8.9 19c-7.7-5 6-7.3 9.9-6 10.2 4.1-7.4 6.1-10 6zm250.7 10c-6.4 0-13.3-10.4-2.7-8.7 4 1.7 13.9 9.2 2.7 8.7zM159.2 13c-6.8-2.7 2.2-18.7 4.1-8-.3 3.2 0 8-4.1 8zm-74.9-.1c-6.8-2.2.8-18.3 4.7-11-1.7 3.3 1.7 12.7-4.7 11zm-32.3.3c-9.1-1-1.3-20.1 1.5-8.3-.4 2.8 3.4 7.7-1.5 8.3zm67.4.1c-6.7-4.5 8.1-20 6.8-9-1.7 3.6-1.1 9.8-6.8 9zm-66.4 1c-.8-1.4 1 .2 0 0zm134 1.9c-5.3-3.8.2-16.9 6.8-15 .2 3.4-1.8 15.2-6.8 15zM199.8 101.2c-5.4-3-1.1-19 4.1-10.3.4 3.6 2 11.6-4 10.3zM236.8 91.3c-5.9-2.2-7.5-13.6.8-9.4 3.1 2.7 6.9 10.2-.8 9.4zM22.8 95c-6-3.1 7.6-17.1 6.5-6-1 2.7-3 6.6-6.5 6zm38.6 4.2c-5.2-2.4 2.6-18.9 4.7-8.3-.8 2.9 0 9-4.7 8.3zm71 1.1c-5.7-3-1.6-20 3.2-9.4.8 3 1.8 10-3.2 9.4zm-34.1 0c-5-3-.6-20.7 4.7-11.8-.4 3.6.9 12.2-4.7 11.8zm68.8.7c-6.8-2.8 2.5-18.1 4.6-7.8-.5 3 0 8.7-4.6 7.7z"
        className={styles.sparkles}
      />
    </svg>
  );
}
