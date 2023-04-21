import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import styles from "./ThemeSwitch.module.css";

export type ThemeButtonProps = {
  className?: string;
};

// https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
export function ThemeSwitch({ className }: ThemeButtonProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles.switch} ${className || ""}`}
      viewBox="0 0 131.8 120.3"
    >
      <g
        className={styles.tablet}
        onClick={() => {
          if (theme === "dark") {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      >
        <path
          fill="var(--svg-stroke-color)"
          d="M64 120.3a98.4 98.4 0 0 1-35.5-9.3C18 105.3 7.2 98 3 86.2-.7 77.6.5 67.9 0 58.7c1.1-11 7-20.8 14.6-28.5 6.5-7 12.8-15 22.2-18.2 6.5-2.3 12.4-7 19.6-7 5.1-1 10-3.2 15-4.1-.6-.4 6-.6 8-.8 15.6-.8 32 4.7 42 17.1a36.1 36.1 0 0 1 9.6 22.9 78 78 0 0 1-21.3 64.7 59.2 59.2 0 0 1-40.6 15.5H64z"
        />
        <path
          fill="var(--svg-bg-color)"
          d="M68.5 118c15-.2 30.8-5 41.2-16.4 8.2-9 14-20 16.9-31.8 3.6-13 3.3-26.8-.1-39.7a45 45 0 0 0-32-26.5 59 59 0 0 0-33 2C56 7.1 50.2 6.8 45.2 9.8c-3.8 2.9-8.3 3.5-12.6 6-7.7 4.5-13 12-19.1 18.4-1.8 2.4-1.7 1-2.6 3.4a38.2 38.2 0 0 0-8.4 25.5c.3 8.6-.2 17.6 4.1 25.4A46.4 46.4 0 0 0 27 107.3a96 96 0 0 0 26.3 9.4c5 .9 10 1.5 15.1 1.2z"
        />
        <path
          fill="var(--svg-stroke-color)"
          d="M37.8 64.6c-1.5-1.2-2-8.4 1.3-6.4-.2 1.7 1.4 6.2-1.3 6.4zM49 69.2c-2.7-3.3 7.6-8.2 3.8-3.4-1.3 1-1.8 3.5-3.7 3.4zm-21.2.4c-3.2-.7-6.3-9-1.5-5 .7 1 5.4 5 1.5 5zm-6.2 9.8c-2.3.1-9.7-1.5-4-2.6 2-.6 9.9 2 4 2.6zM58.4 83c-2.8 1.1-9.6-1.5-3.7-2.4 3.1-.8 12.5 1.2 3.7 2.3zm-21.8 9.6c-6-.2-12.9-5-10.5-11.7.7-5.4 3.8-10.8 9.4-12 5.2-1.7 12.4.6 13.7 6.5.8 5.2-.3 11.9-4.8 15a14.4 14.4 0 0 1-7.8 2.2z"
        />
        <path
          fill="var(--svg-stroke-color)"
          d="M20.5 96c-3.6-2.4 9.2-7.3 3.4-2.3-1.2.6-2 2.2-3.4 2.3zm31.7 1.7c-2.6-1.2-6.7-9.3-1.3-5 .8 1.3 5.4 5 1.3 5zm-15.6 8.5c-.2-2.8-1-8 .6-10.2 1.8 1.7 3.1 9.5-.6 10.2z"
        />
        <path
          fill="var(--svg-bg-color)"
          d="M39 90.5c6.5-.2 8.5-7.3 8.3-12.6 0-6.2-7.4-9.1-12.5-6.8-5.4 2-7 9.2-6.5 14.4 1.8 3.7 6.8 5.6 10.7 5z"
        />
        <path
          fill="var(--svg-stroke-color)"
          d="M95 93.2c-3.4 0 1.6-7.3-2.1-10.9-4.9-4.6-10.5 1.2-10.2 6-2.1 2.1-5.4-4.8-4.9-7.1-.2-6.4 6.4-10.5 12-11.6 7-.2 14.6 5.5 14.8 13 1.8 5.7-2.3 11.8-8.6 10.7h-1z"
        />
        <path
          fill="var(--svg-bg-color)"
          d="M97 90.8c7.8.8 7-10.3 3.2-14.3-3.8-4.2-10.5-6.3-15.4-2.5-4.7 1.2-6.5 10-3.3 11 0-5.8 9-8.1 12.6-3.8 4.1 1.7 0 10.4 2.9 9.6z"
        />
      </g>
    </svg>
  );
}