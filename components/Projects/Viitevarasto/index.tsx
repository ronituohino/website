import { Postgres, Python, Docker } from "../../SVG";
import Link from "next/link";

export function Viitevarasto() {
  return (
    <>
      <h1>Viitevarasto</h1>
      <Python title="" width={200} />
      <Postgres title="" width={200} />
      <Docker title="" width={200} />

      <Link href="https://github.com/Perttu-Kangas/ohtu-mini">GitHub here</Link>
      <Link href="https://viitevarasto.fly.dev/">Livelink here</Link>
    </>
  );
}
