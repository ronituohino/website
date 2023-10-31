import { createSignal } from "solid-js";
import type { JSX } from "solid-js";
import { BsQuestion } from "solid-icons/bs";

import styles from "./Description.module.css";

type DescriptionProps = {
  first?: JSX.Element;
  second?: JSX.Element;
  third?: JSX.Element;
};

export function Description({ first, second, third }: DescriptionProps) {
  const [selected, setSelected] = createSignal(0);
  const elements = [first, second, third];

  return (
    <div class={styles.description}>
      {elements[selected()]}
      <button
        onClick={() => {
          setSelected(selected() + 1);
        }}
        class={styles.button}
      >
        <BsQuestion class={styles.icon} />
      </button>
    </div>
  );
}
