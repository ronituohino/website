import { Picture } from "../../../components/Picture";
import Link from "next/link";

import yellowishgreenImage from "./yellowishgreen.jpg";

import styles from "./GParticles.module.css";

export default function GParticles() {
  return (
    <div className={styles.background}>
      <article className={styles.container}>
        <h1>GParticles</h1>
        <p>Art project</p>
        <p>
          A really quick Unity project. The main idea was to achieve some cool
          effects with particles and physics. For some reason this kind of took
          off in the Play Store. I tried to optimize it by moving all the
          calculations to the GPU but I had some other stuff come up while
          trying to learn compute shaders. I guess now I could just ask ChatGPT
          to write the shader lol.
        </p>

        <Picture
          title="Purple particles circulating around multiple points the user is pressing on."
          width="200"
          imgWidth="100"
          frame="roundBox1"
          src="/pictures/gparticles-pinkishpurple.jpg"
        />
        <Picture
          title="Yellow and green particles shooting off into different directions."
          width="200"
          imgWidth="100"
          frame="box2"
          src="/pictures/gparticles-yellowishgreen.jpg"
        />

        <Link href="https://github.com/ronituohino/GParticles">
          GitHub here
        </Link>
        <Link href="https://play.google.com/store/apps/details?id=com.Tuohino.GParticles">
          Google Play
        </Link>
      </article>
    </div>
  );
}
