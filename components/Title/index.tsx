import styles from "./Title.module.css";
import {
  Camo,
  Controller,
  CSharp,
  Destiny,
  Disco,
  Docker,
  Gym,
  Minecraft,
  NodeJS,
  Postgres,
  Python,
  ReactLogo,
  Redstone,
  TypeScript,
  Unity,
  University,
} from "../SVG";

export function Title() {
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>Roni Tuohino</h1>
      <h2 className={styles.title}>Fullstack Developer</h2>
      <div className={styles.glossary}>
        <Camo title="" width={200} />
        <Controller title="" width={200} />
        <CSharp title="" width={200} />
        <Destiny title="" width={200} />
        <Disco title="" width={200} />
        <Docker title="" width={200} />
        <Gym title="" width={200} />
        <Minecraft title="" width={200} />
        <NodeJS title="" width={200} />
        <Postgres title="" width={200} />
        <Python title="" width={200} />
        <ReactLogo title="" width={200} />
        <Redstone title="" width={200} />
        <TypeScript title="" width={200} />
        <Unity title="" width={200} />
        <University title="" width={200} />
      </div>
    </div>
  );
}
