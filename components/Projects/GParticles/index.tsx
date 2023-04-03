import { Unity, CSharp } from "../../SVG";
import Link from "next/link";

export function GParticles() {
  return (
    <>
      <h1>GParticles</h1>
      <Unity title="" width={200} />
      <CSharp title="" width={200} />

      <Link href="https://github.com/ronituohino/GParticles">GitHub here</Link>
      <Link href="https://play.google.com/store/apps/details?id=com.Tuohino.GParticles">
        Google Play
      </Link>
    </>
  );
}
