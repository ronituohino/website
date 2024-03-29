import type { IconProps } from ".";

export function Happy({ title, className, width, height }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 32.7 53.9"
    >
      <title>{title}</title>
      <path
        fill="var(--svg-stroke-color)"
        d="M11.6 53.9A13.2 13.2 0 0 1 0 42.6c0-3 .6-6 1.1-9 .2-1 1.6-2.1 1.5-3.5.5-2.5 3.6-3 5.5-1.9 2.4.9 4.9 1.4 7.3 2 3.9.4 7.7 1.1 11.6 1 1.5.3 3-.2 4.4.4 2.3 1.3.8 4.4.5 6.5-.9 4.3-3.2 8.2-6 11.5-2.8 2.8-6.9 4-10.8 4.1l-3.5.2zm3.7-4.7c2.5 0 5.1-.6 6.7-2.7 2.3-2.8 4-6.3 4-10-1.4-1-4.2-.5-6.1-1.1A89 89 0 0 1 7.4 33c-1.3 1.9-.9 4.5-1.3 6.6a8.3 8.3 0 0 0 9.2 9.6zM25.4 23c-3-.1-2.2-3.4-1.8-5.3 1.3-3.5 2-7.2 2.3-11-.8-2.6 2.7-5.2 4.6-2.9 1.3 2.2.2 4.9 0 7.3-.3 3.2-1.5 6.2-2.1 9.3-.7 1.7-1.2 2.6-3 2.6zm-12.7-1.4c-3 .1-2.5-3.6-1.7-5.5 1-4 1.8-8.2 2.4-12.4-.6-2.7 2.9-5 4.9-2.8 1.3 2-.1 4.7-.2 7-.7 4.2-1.5 8.4-2.8 12.5-.5.8-1.6 1.3-2.6 1.2z"
      />
    </svg>
  );
}
