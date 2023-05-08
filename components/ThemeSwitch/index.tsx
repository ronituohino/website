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
    <button
      onClick={() => {
        if (theme === "dark") {
          setTheme("light");
        } else {
          setTheme("dark");
        }
      }}
      className={`${styles.switch} ${className || ""}`}
      aria-label={`Change website theme, current theme is ${theme}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166.6 167.9">
        <path
          fill="var(--svg-stroke-color)"
          d="M167.7 115.7c2.4 9.2-65.1 44.7-73.4 47.4-4.5 1.6-13.8 4.4-18.4 4.8v.1c-8 0-14.8-2.8-22.3-5.3-9.2-3-19-6.8-25.9-14-4.5-5.2-10.3-9-14.5-14.7-7.4-8.7-9.6-20.3-12-31.2a74.7 74.7 0 0 1 2.5-38.5C8 50.8 12.5 37 21.7 25.8a73 73 0 0 1 37.6-23c12.8-3.2 26-3.6 39-1.3 20.7 5.7 72 27.4 69.4 36.5"
        />
        <path
          fill="var(--svg-bg-color)"
          d="M158.7 37.4c-13.9-12-51.7-25.6-65.5-28.9-9.2-1-23.9.8-30.1 1-13.2 2-27 11.6-35 21.2-3 5.2-6.7 10.2-8.5 15.9C16.3 57.8 10.5 67.5 9 79a87.6 87.6 0 0 0 3.2 31.6c2 7 4.5 14 9.9 19.3a61.4 61.4 0 0 0 58 26.7c3-.2 21.5-6 27.5-9.1 5-3.9 38.8-20 52.3-31"
        />
        <path
          fill="var(--svg-stroke-color)"
          d="M54.5 35.8c-4.3-5.2 3.2-15.1 5.4-5.1-.6 8.8-4.4 6.1-5.4 5.1zm16.8-4.2c7.3-3.7 7.3 7.6.1 8-7.7.1-3.6-6 0-8zM45 41.9c-5.8 0-8.8-11.8-.6-7.8 3.1 3.7 6 6.1.7 7.8zM74.7 53c-8.4-1.2 2-10.2 5.1-5 4.4 4.9-1.2 5.6-5.1 5zM37 56c-6.8-.9-3.6-8.5 2.1-6 6.7 1.3 4 7.6-2.2 6z"
        />
        <path
          fill="var(--svg-stroke-color)"
          d="M51.3 61.4c-6.8-2.6-9.4-12.6-4-17.8 5.4-2.2 12.7-4.1 18-1.9 5.4 5.2 3.6 14-2.6 17.7a20.6 20.6 0 0 1-11.4 2z"
        />
        <path
          fill="var(--svg-bg-color)"
          d="M52 54.6c3.6 1.5 11.9-4.2 6.3-6.9-5.9-2.4-8.9 4.7-6.3 7z"
        />
        <path
          fill="var(--svg-stroke-color)"
          d="M70 67.2c-8.9-2.6-1.5-12.7 2.8-4.7 1.8 2.4.7 5.8-2.8 4.7zm-28.8 1.7c-8.8-3.6 7.7-15.8 7-5.4-1.7 2.2-3.6 6-7 5.4zM55 63.2c5.2 0 6 10.6 1.3 9.7-2.6-.4-4.3-8.1-1.2-9.7zm-.5 72.8c-8.8.2-13.7-5.1-15-13.2-1.9-9.8 6.6-3.8 14-4.3 3.3-.2.4-8.6-4.7-10.6-6-2.4 2.3-7.2 6.8-8.2 6.2-1.4 11.5 0 15.4 4.5 6.7 7 4.2 19-1.7 25.6-4.2 3-9.5 6.4-14.8 6z"
        />
        <path
          fill="var(--svg-bg-color)"
          d="M58.1 128.7c6.3-2 10.7-7.8 10.8-14.4 0-3-3.2-9.9-13.3-8.8 4 2.8 7.2 9.4 4.2 16-1 2.7-7.9 4-13 2.7.4 3.2 6 5.8 11.3 4.5z"
        />
      </svg>
    </button>
  );
}
