import { ButtonFrameKeys, buttonFrames } from "../ButtonFrame";

import Link from "next/link";

type LinkButtonProps = {
  text: string;
  href: string;
  variant: ButtonFrameKeys;
  className?: string;
};

export function LinkButton({
  text,
  href,
  variant,
  className,
}: LinkButtonProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={buttonFrames[variant][1].viewBox}
      className={className}
    >
      <Link href={href}>
        {buttonFrames[variant][0]}
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
