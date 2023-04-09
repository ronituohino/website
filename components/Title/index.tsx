type TitleProps = {
  className?: string;
};

export function Title({ className }: TitleProps) {
  return (
    <header className={className}>
      <h1>Hello, my name is Roni.</h1>
      <h2>
        I&apos;m a Finnish full-stack developer, and I like coding cool stuff!
      </h2>
      <h2>
        Here is a little glossary of what I&apos;ve built over the past few
        years.
      </h2>
    </header>
  );
}
