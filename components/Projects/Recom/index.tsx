import Link from "next/link";
import { ReactLogo, NodeJS } from "../../SVG";

export function Recom() {
  return (
    <>
      <h1>Recom</h1>
      <p>
        Short description: A final project for the{" "}
        <Link href="https://fullstackopen.com/en/">
          Full stack open web development course
        </Link>
      </p>
      <p>
        Long description: This was my first major web project. I have made some
        interesting design choices, but I think would work just fine. It
        consists of four parts: a client app, a backend, database, and an admin
        tool.
      </p>
      <p>Insert images here...</p>
      <p>
        Tech used:
        <ReactLogo title="" width={200} />
        <NodeJS title="" width={200} />
      </p>
      <Link href="https://github.com/ronituohino/recom">GitHub here </Link>
      <Link href="https://ronituohino.fi">Livelink here</Link>
    </>
  );
}
