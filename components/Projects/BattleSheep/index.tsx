import { TypeScript, Firebase, Vite } from "../../SVG";

import Link from "next/link";

export function BattleSheep() {
  return (
    <>
      <h1>Battle Sheep</h1>
      <TypeScript title="" width={200} />
      <Firebase title="" width={200} />
      <Vite title="" width={200} />

      <Link href="https://github.com/ronituohino/tiralabra">GitHub here</Link>
      <Link href="https://battle-sheep-game.web.app/">Livelink here</Link>
    </>
  );
}
