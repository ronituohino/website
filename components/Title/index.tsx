import { Zen_Tokyo_Zoo, Hurricane } from "@next/font/google";

const zen = Zen_Tokyo_Zoo({ weight: "400" });
const hurricane = Hurricane({ weight: "400" });

import styles from "./Title.module.css";

export default function Title() {
  return (
    <div className={styles.container}>
      <div className={zen.className}>
        <h1 className={styles.title}>FULLSTACK</h1>
      </div>

      <div className={hurricane.className}>
        <h1 className={styles.subtitle}>Developer</h1>
      </div>
    </div>
  );
}
