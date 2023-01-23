import { Title } from "../Title";
import Link from "next/link";

import styles from "./Hero.module.css";
import { Box } from "../Box";

export function Hero() {
  return (
    <section className={styles.container}>
      <Title />
      <Link target="_blank" href="/sample.jpg">
        <Box color="cyan">Check out my CV</Box>
      </Link>
    </section>
  );
}
