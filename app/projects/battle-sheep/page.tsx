import { Picture } from "../../../components/Picture";
import { LinkButton } from "../../../components/LinkButton";
import { LinkIcon } from "../../../components/LinkIcon";
import { GitHub } from "../../../components/SVG";
import styles from "./BattleSheep.module.css";
import { InlineLink } from "../../../components/InlineLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Battle Sheep - Roni Tuohino",
  description:
    "Project overview of Battle Sheep, a university algorithms project.",
};

export default function BattleSheep() {
  return (
    <div className={styles.background}>
      <div className={styles.backgroundLeft} />
      <div className={styles.backgroundRight} />
      <article className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Battle Sheep</h1>

          <ul className={styles.links}>
            <li>
              <LinkIcon
                label="Project GitHub"
                href="https://github.com/ronituohino/tiralabra"
                icon={<GitHub title="" />}
                className={styles.githubLink}
              />
            </li>
            <li>
              <LinkButton
                href="https://battle-sheep-game.web.app/"
                text="Demo"
                variant="large"
                className={styles.demoLink}
              />
            </li>
          </ul>

          <p>
            <InlineLink href="https://www.blueorangegames.com/index.php/games/battle-sheep">
              Battle Sheep
            </InlineLink>{" "}
            is a board game about capturing as much area on the board as
            possible, but you can only move your sheep linearly by splitting up
            existing stacks of sheep. This project is about transfering the game
            onto the web, and implementing an AI adversary. This project was for
            a university algorithms course. If you want to try it out, I
            recommend playing on the &apos;open&apos; level.
          </p>
        </header>

        <div className={styles.pics}>
          <Picture
            title="Main game screen with the game board and movement controls."
            width="350"
            imgWidth="110"
            frame="box1"
            src="/pictures/projects/battlesheep/game.png"
          />
          <Picture
            title="The player selecting a new square onto which move their pieces."
            width="400"
            imgWidth="130"
            frame="box2"
            src="/pictures/projects/battlesheep/movement.png"
          />
        </div>

        <section className={styles.aiSection}>
          <h2>The AI algorithm</h2>
          <p>
            I implemented the AI using a minimax algorithm with alpha-beta
            pruning, and optimization tricks such as &apos;move ordering&apos;.
            The online version makes the AI traverse the game tree until a depth
            of 6, i.e. find the best move for the next 6 turns into the future.{" "}
            <InlineLink href="https://github.com/ronituohino/tiralabra/blob/main/docs/implementation.md#ai-performance">
              Here are some performance benchmarks for the AI
            </InlineLink>
            .
          </p>
          <br />
          <p>
            I&apos;m sure there is still plenty of room for optimization, but I
            didn&apos;t have time to explore further. One way to improve the
            performance of the AI is by using web workers to take advantage of
            parallel processing.
          </p>
        </section>
      </article>
    </div>
  );
}
