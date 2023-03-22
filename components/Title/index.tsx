import styles from "./Title.module.css";
import {
  Camo,
  Controller,
  Destiny,
  Disco,
  Gym,
  Minecraft,
  Redstone,
  University,
} from "../SVG";

export function Title() {
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>Hello, my name is Roni.</h1>
      <h2 className={styles.title}>
        I&apos;m a Finnish full-stack developer, and I like coding cool stuff!
      </h2>
      <h2 className={styles.title}>
        Here is a little glossary of what I&apos;ve built over the past few
        years.
      </h2>
      <div className={styles.glossary}>
        <Camo title="" width={200} />
        <Controller title="" width={200} />

        <Destiny title="" width={200} />
        <Disco title="" width={200} />

        <Gym title="" width={200} />
        <Minecraft title="" width={200} />

        <Redstone title="" width={200} />

        <University title="" width={200} />
      </div>
    </div>
  );
}
