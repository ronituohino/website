import styles from "./Title.module.css";
import {
  Controller,
  Destiny,
  Disco,
  Docker,
  Gym,
  Minecraft,
  NodeJS,
  Postgres,
  ReactLogo,
  Redstone,
  TypeScript,
  Unity,
} from "../SVG";

export function Title() {
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>Roni Tuohino</h1>
      <h2 className={styles.title}>Fullstack Developer</h2>
      <div className={styles.glossary}>
        <Controller title="" width={200} />
        <Destiny title="" width={200} />
        <Disco title="" width={200} />
        <Docker title="" width={200} />
        <Gym title="" width={200} />
        <Minecraft title="" width={200} />
        <NodeJS title="" width={200} />
        <Postgres title="" width={200} />
        <ReactLogo title="" width={200} />
        <Redstone title="" width={200} />
        <TypeScript title="" width={200} />
        <Unity title="" width={200} />
      </div>
    </div>
  );
}
