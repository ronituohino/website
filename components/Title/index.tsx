import { Profile } from "../SVG";
import styles from "./Title.module.css";

type TitleProps = {
  className?: string;
};

export function Title({ className }: TitleProps) {
  return (
    <header className={`${styles.container} ${className || ""}`}>
      <div className={styles.left}>
        <h1>Hello, I&apos;m Roni.</h1>
        <h2>
          I&apos;m a Finnish full-stack developer, and I like coding cool stuff!
        </h2>
      </div>

      <Profile
        title="Illustration of me: a guy with blonde hair and a gray turtleneck."
        width="100%"
        className={styles.profile}
      />
    </header>
  );
}
