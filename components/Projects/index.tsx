import City from "./city.svg";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <section className={styles.topContainer}>
      <City />
      <div className={styles.posterContainer}>
        <h2>Projects</h2>
      </div>
    </section>
  );
}
