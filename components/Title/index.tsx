import styles from "./Title.module.css";

type TitleProps = {
  className?: string;
};

export function Title({ className }: TitleProps) {
  return (
    <header className={`${styles.container} ${className || ""}`}>
      <h1>Hello, my name is Roni.</h1>
      <h2>
        I&apos;m a Finnish full-stack developer, and I like coding cool stuff!
        Here is a little glossary of what I&apos;ve built over the past few
        years.
      </h2>
    </header>
  );
}
