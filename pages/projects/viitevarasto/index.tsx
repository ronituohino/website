import Link from "next/link";
import { Picture } from "../../../components/Picture";

import styles from "./Viitevarasto.module.css";

export default function Viitevarasto() {
  return (
    <div className={styles.background}>
      <article className={styles.container}>
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
          width="200"
          imgWidth="100"
          frame="box2"
          src="/pictures/viitevarasto-menu.png"
        />
        <Picture
          title="Viitevarasto reference adding menu, with a form for adding a reference into the application."
          width="200"
          imgWidth="100"
          frame="box1"
          src="/pictures/viitevarasto-adding.png"
        />

        <Link href="https://github.com/Perttu-Kangas/ohtu-mini">
          GitHub here
        </Link>
        <Link href="https://viitevarasto.fly.dev/">Livelink here</Link>
      </article>
    </div>
  );
}
