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
          d="M76.6 168c-8 0-16.2-1-23.7-3.5-9.3-3-18.4-7.8-25.3-15-4.6-5.2-10-9.8-14.3-15.5-7.4-8.7-9.7-20.3-12-31.2a74 74 0 0 1 2.4-38.5C8.1 50.8 12.6 37 22 25.8c8.4-11.2 24-19.2 37.9-23a95 95 0 0 1 39.3-1.3c20.9 5.7 61.6 27.9 59 37-1.6 5.5-44.7-25.4-64.1-30-9.3-1-24.1.8-30.4 1-13.3 2-26.2 12.2-34.3 21.8-3.1 5.2-7.8 9.6-9.6 15.3-3.3 11.2-8.5 22-10 33.5a80.5 80.5 0 0 0 2.5 30.5c2 7 4.6 14.1 10 19.3a67.6 67.6 0 0 0 61.5 27.4c3-.2 18.8-6.6 24.8-9.8 6.6-5 56.5-35.5 57.9-30 2.4 9.2-61.8 44.3-70.1 47-4.6 1.6-15.1 3-19.8 3.4zM55 136c-8.9.2-13.8-5.1-15.2-13.2-1.8-9.8 6.7-3.8 14.2-4.3 3.3-.2.4-8.6-4.7-10.6-6.1-2.4 2.3-7.2 6.8-8.2 6.3-1.4 11.6 0 15.6 4.5 6.7 7 4.2 19-1.7 25.6-4.3 3-9.6 6.4-15 6.1zm3.7-7.3a15.5 15.5 0 0 0 10.9-14.4c0-3-3.3-9.9-13.5-8.8 4 2.8 7.3 9.4 4.3 16.1-1.1 2.6-8 4-13.2 2.6.5 3.2 6.1 5.8 11.5 4.5zm-3.1-65.5c5.2 0 6 10.6 1.2 9.7-2.6-.4-4.3-8.1-1.2-9.7zm-14 5.7c-8.9-3.6 7.8-15.8 7-5.4-1.7 2.2-3.6 6-7 5.4zm29.1-1.7c-9-2.6-1.5-12.7 2.8-4.7 1.8 2.4.7 5.8-2.8 4.7zm-18.9-5.8c-6.9-2.6-9.5-12.6-4-17.8 5.4-2.2 12.8-4.1 18.1-1.9 5.5 5.2 3.7 14-2.6 17.7a21 21 0 0 1-11.5 2zm.7-6.8c3.6 1.5 12-4.2 6.4-6.9-6-2.4-9 4.7-6.4 7zM37.3 56c-6.8-.9-3.6-8.5 2.2-6 6.7 1.3 4.1 7.6-2.2 6zm38.1-3c-8.5-1.2 2-10.2 5.2-5 4.4 4.9-1.3 5.6-5.2 5zM45.5 41.9c-5.9 0-9-11.8-.7-7.8 3.2 3.7 6 6.1.7 7.8zM72 31.6c7.3-3.7 7.3 7.6.1 8-7.8.1-3.7-6-.1-8zm-17 4.2c-4.3-5.2 3.2-15.1 5.5-5.1-.6 8.8-4.5 6.1-5.5 5.1z"
        />
      </svg>
    </button>
  );
}
