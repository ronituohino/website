import { Picture } from "../../../components/Picture";
import Link from "next/link";

import styles from "./BattleSheep.module.css";

export default function BattleSheep() {
  return (
    <div className={styles.background}>
      <article className={styles.container}>
        <h1>Battle Sheep</h1>
        <p>- on the web with AI.</p>
        <p>
          Battle Sheep is a board game about controlling as much area on the
          board as possible but with limited movement. I managed to get the AI
          working with game trees, alpha-beta pruning, and some optimization
          tricks. The AI proves quite a formidable opponent especially on the
          &apos;open&apos; map. I wanted to optimize it further by
          multithreading the algorithm using web workers, but I had no time for
          that.
        </p>

        <Picture
          title="Main game screen with the game board and movement controls."
          width="200"
          imgWidth="110"
          frame="box1"
          src="/pictures/battlesheep-game.png"
        />
        <Picture
          title="The player selecting a new square onto which move their pieces."
          width="200"
          imgWidth="130"
          frame="box2"
          src="/pictures/battlesheep-movement.png"
        />

        <Link href="https://github.com/ronituohino/tiralabra">GitHub here</Link>
        <Link href="https://battle-sheep-game.web.app/">Livelink here</Link>
      </article>
    </div>
  );
}
