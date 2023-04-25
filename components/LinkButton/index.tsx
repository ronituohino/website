import { buttonFrames } from "../ButtonFrame";

import Link from "next/link";

type LinkButtonProps = {
  text: string;
  href: string;
  className?: string;
};

export function LinkButton({ text, href, className }: LinkButtonProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={buttonFrames.large[1].viewBox}
      className={className}
    >
      <Link href={href}>
        {buttonFrames.large[0]}
        <text
          x="50%"
          y="66%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="var(--svg-stroke-color)"
          fontSize="32px"
        >
          {text}
        </text>
      </Link>
    </svg>
  );
}
