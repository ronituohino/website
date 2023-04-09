import { Postgres, Python, Docker } from "../../SVG";
import Link from "next/link";
import { Picture } from "../../Picture";

import menuImage from "./menu.png";
import addingImage from "./adding.png";

type ViitevarastoProps = {
  className?: string;
};

export function Viitevarasto({ className }: ViitevarastoProps) {
  return (
    <article className={className}>
      <h1>Viitevarasto</h1>
      <p>References management application for BibTeX.</p>
      <p>
        University group project for a software production course. The idea is
        that the user can upload their references onto the application and
        select which ones to compile into a BibTeX file for whatever document
        they are working on. This avoids having to manually manage the BibTeX
        file and updating the references throughout the document, and it also
        makes adding new references easier.
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
    </article>
  );
}
