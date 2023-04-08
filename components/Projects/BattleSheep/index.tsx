import { TypeScript, Firebase, Vite } from "../../SVG";
import { Picture } from "../../Picture";
import Link from "next/link";

import gameImage from "./game.png";
import movementImage from "./movement.png";

export function BattleSheep() {
  return (
    <>
      <h1>Battle Sheep</h1>
      <p>
        Another school project, this time an algorithms course. I wanted to make
        an AI for Battle Sheep, a board game about controlling as much area on
        the board as possible but with limited movement. I managed to get the AI
        working with game trees, alpha-beta pruning, and some optimization
        tricks. It proves quite a formidable opponent especially on the
        &apos;open&apos; map. I wanted to optimize it further by multithreading
        the algorithm using web workers, but I had no time for that.
      </p>

      <Picture
        title="Main game screen with the game board and movement controls."
        width={200}
        imgWidth={100}
        frame="paper"
        href={gameImage.src}
      />
      <Picture
        title="The player selecting a new square onto which move their pieces."
        width={200}
        imgWidth={100}
        frame="board"
        href={movementImage.src}
      />

      <TypeScript title="TypeScript" width={200} />
      <Firebase title="Firebase" width={200} />
      <Vite title="Vite" width={200} />

      <Link href="https://github.com/ronituohino/tiralabra">GitHub here</Link>
      <Link href="https://battle-sheep-game.web.app/">Livelink here</Link>
    </>
  );
}
