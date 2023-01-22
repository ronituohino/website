import { Hurricane, Zen_Tokyo_Zoo } from "@next/font/google";
const hurricane = Hurricane({ weight: "400" });
const zen = Zen_Tokyo_Zoo({ weight: "400" });

import styles from "./Title.module.css";

export default function Title() {
  return (
    <>
      <div className={zen.className}>
        <h1 className={styles.title}>FULLSTACK</h1>
      </div>

      <div className={hurricane.className}>
        <h2 className={styles.subtitle}>Developer</h2>
      </div>
    </>
  );
}
