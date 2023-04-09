import { Unity, CSharp } from "../../SVG";
import Link from "next/link";
import { Picture } from "../../Picture";

import pinkishpurpleImage from "./pinkishpurple.jpg";
import yellowishgreenImage from "./yellowishgreen.jpg";

type GParticlesProps = {
  className?: string;
};

export function GParticles({ className }: GParticlesProps) {
  return (
    <article className={className}>
      <h1>GParticles</h1>
      <p>Art project</p>
      <p>
        A really quick Unity project. The main idea was to achieve some cool
        effects with particles and physics. For some reason this kind of took
        off in the Play Store. I tried to optimize it by moving all the
        calculations to the GPU but I had some other stuff come up while trying
        to learn compute shaders. I guess now I could just ask ChatGPT to write
        the shader lol.
      </p>

      <Picture
        title="Purple particles circulating around multiple points the user is pressing on."
        width={200}
        imgWidth={100}
        frame="paper"
        href={pinkishpurpleImage.src}
      />
      <Picture
        title="Yellow and green particles shooting off into different directions."
        width={200}
        imgWidth={100}
        frame="board"
        href={yellowishgreenImage.src}
      />

      <Unity title="Unity game engine" width={200} />
      <CSharp title="C sharp" width={200} />

      <Link href="https://github.com/ronituohino/GParticles">GitHub here</Link>
      <Link href="https://play.google.com/store/apps/details?id=com.Tuohino.GParticles">
        Google Play
      </Link>
    </article>
  );
}
