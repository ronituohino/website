import { createSignal } from "solid-js";
import type { JSX } from "solid-js";
import { FaSolidQuestion } from "solid-icons/fa";

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
      {selected() < 2 && (
        <button
          onClick={() => {
            setSelected(selected() + 1);
          }}
          class={styles.button}
        >
          <FaSolidQuestion class={styles.icon} />
        </button>
      )}
    </div>
  );
}
