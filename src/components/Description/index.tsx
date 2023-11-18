import { createSignal } from "solid-js";
import type { JSX } from "solid-js";
import { FaSolidQuestion } from "solid-icons/fa";

import styles from "./Description.module.css";

type DescriptionProps = {
  class?: string;
  first?: JSX.Element;
  second?: JSX.Element;
  third?: JSX.Element;
};

export function Description({
  class: className,
  first,
  second,
  third,
}: DescriptionProps) {
  const [selected, setSelected] = createSignal(0);
  const elements = [first, second, third];

  return (
    <div class={`${styles.description} ${className}`}>
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
