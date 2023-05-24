"use client";

import { usePathname } from "next/navigation";

import { ThemeSwitch } from "../ThemeSwitch";
import { PeekingLinkButton } from "../PeekingLinkButton";

import styles from "./Nav.module.css";

export function Nav() {
  const pathname = usePathname();
  const linkDisabled = (comparisonPath: string) => {
    return comparisonPath === pathname;
  };

  const linkStyles = (disabled: boolean) => {
    if (disabled) {
      return styles.disabledLink;
    }
    return styles.link;
  };
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.links}>
        <li>
          <PeekingLinkButton
            variant="large"
            text="Home"
            href="/"
            disabled={linkDisabled("/")}
            className={linkStyles(linkDisabled("/"))}
          />
        </li>
        <li>
          <PeekingLinkButton
            variant="large"
            text="Blog"
            href="/blogs"
            disabled={linkDisabled("/blogs")}
            className={linkStyles(linkDisabled("/blogs"))}
          />
        </li>
      </ul>

      <ThemeSwitch className={styles.themeSwitch} />
    </nav>
  );
}
