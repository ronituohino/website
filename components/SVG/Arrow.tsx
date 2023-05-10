import type { IconProps } from ".";

export function Arrow({ title, className, width, height }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 57.9 138.5"
    >
      <title>{title}</title>
      <path
        fill="none"
        stroke="var(--svg-stroke-color)"
        strokeLinecap="round"
        strokeWidth="4"
        d="M46.5 4c5.2 45.5-2.6 74-19.8 108.4v0M3.9 98.7c15.5 17 6.1 34.5 11.3 35.7 3.8.9 16-15 38.7-19.1v0"
      />
    </svg>
  );
}
