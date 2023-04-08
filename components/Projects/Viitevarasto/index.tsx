import { Postgres, Python, Docker } from "../../SVG";
import Link from "next/link";
import { Picture } from "../../Picture";

import menuImage from "./menu.png";
import addingImage from "./adding.png";

export function Viitevarasto() {
  return (
    <>
      <h1>Viitevarasto</h1>
      <p>University group project for a software production course.</p>
      <p>
        This is a references management application for BibTeX. The idea is that
        the user can upload their references onto the application and select
        which ones to compile into a BibTeX file for whatever document they are
        working on. This avoids having to manually manage the BibTeX file and
        updating the references throughout the document, and it also makes
        adding new references easier.
      </p>

      <Picture
        title="Viitevarasto main menu, with a list of added references and controls for manipulating references."
        width={200}
        imgWidth={100}
        frame="board"
        href={menuImage.src}
      />
      <Picture
        title="Viitevarasto reference adding menu, with a form for adding a reference into the application."
        width={200}
        imgWidth={100}
        frame="paper"
        href={addingImage.src}
      />

      <Python title="Python" width={200} />
      <Postgres title="Postgres" width={200} />
      <Docker title="Docker" width={200} />

      <Link href="https://github.com/Perttu-Kangas/ohtu-mini">GitHub here</Link>
      <Link href="https://viitevarasto.fly.dev/">Livelink here</Link>
    </>
  );
}
