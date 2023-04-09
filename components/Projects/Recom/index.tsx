import Link from "next/link";
import { ReactLogo, NodeJS, GraphQL, MongoDB } from "../../SVG";
import { Picture } from "../../Picture";

import storepageImage from "./storepage.png";
import orderingImage from "./ordering.png";
import { InlineLink } from "../../InlineLink";

type RecomProps = {
  className?: string;
};

export function Recom({ className }: RecomProps) {
  return (
    <article className={className}>
      <h1>Recom</h1>
      <p>Online shopping platform, &apos;React e-commerce&apos;.</p>
      <p>
        Final project for a{" "}
        <InlineLink href="https://fullstackopen.com/en/">
          Full stack web development course
        </InlineLink>
        . This was my first major web project. It consists of four parts: a
        store app, a backend server, a database, and an admin app. The store and
        admin applications are built with React and MUI, and they are
        communicating with the server via GraphQL. All of the store and user
        information are stored in MongoDB.
      </p>

      <Picture
        title="Storepage for a pair of sneakers with multiple images of the sneakers."
        width={200}
        imgWidth={200}
        frame="board"
        href={storepageImage.src}
      />
      <Picture
        title="Ordering page where the user is selecting a postal delivery point."
        width={200}
        imgWidth={200}
        frame="paper"
        href={orderingImage.src}
      />

      <ReactLogo title="React" width={200} />
      <NodeJS title="NodeJS" width={200} />
      <GraphQL title="GraphQL" width={200} />
      <MongoDB title="MongoDB" width={200} />

      <Link href="https://github.com/ronituohino/recom">GitHub here </Link>
      <Link href="https://recom-pnxd5duksa-lz.a.run.app">Livelink here</Link>
    </article>
  );
}
