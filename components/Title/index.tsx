import styles from "./Title.module.css";
import { Gym, Disco, Controller } from "../SVG";

export function Title() {
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>Roni Tuohino</h1>
      <h2 className={styles.title}>Fullstack Developer</h2>
      <Gym title="gym barbell" />
      <Disco title="discoball" />
      <Controller title="console controller" />
    </div>
  );
}
