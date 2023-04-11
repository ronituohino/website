import { Profile } from "../SVG";
import styles from "./Title.module.css";

type TitleProps = {
  className?: string;
};

export function Title({ className }: TitleProps) {
  return (
    <header className={`${styles.container} ${className || ""}`}>
      <h1 className={styles.title}>Hi, I&apos;m Roni.</h1>
      <h2 className={styles.description}>
        I&apos;m a developer, and I like tinkering and design.
      </h2>

      <Profile
        title="Illustration of me: a guy with blonde hair and a gray turtleneck."
        width="100%"
        className={styles.profile}
      />
    </header>
  );
}
