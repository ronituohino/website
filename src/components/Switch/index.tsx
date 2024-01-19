import { createSignal } from "solid-js";

import styles from "./Switch.module.css";

type SwitchProps = {
  class?: string;
  label?: string;
  ariaLabel?: string;
};

export function Switch({ class: className, label, ariaLabel }: SwitchProps) {
  const [checked, setChecked] = createSignal(false);

  return (
    <div
      role="switch"
      aria-checked={checked()}
      tabindex="0"
      onClick={() => setChecked(!checked())}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key == " ") {
          event.preventDefault();
          setChecked(!checked());
        }
      }}
      aria-label={ariaLabel ? ariaLabel : undefined}
      class={`${styles.root} ${className}`}
    >
      {label && <span>{label}</span>}
      <span class={styles.switch}>
        <span class={styles.knob}></span>
      </span>
    </div>
  );
}
