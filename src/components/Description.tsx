import { createSignal } from "solid-js";
import type { JSX } from "solid-js";

type DescriptionProps = {
  first?: JSX.Element;
  second?: JSX.Element;
  third?: JSX.Element;
};

export function Description({ first, second, third }: DescriptionProps) {
  const [selected, setSelected] = createSignal(0);
  const elements = [first, second, third];

  return (
    <>
      {elements[selected()]}
      <button
        onClick={() => {
          setSelected(selected() + 1);
        }}
      >
        increase by one
      </button>
    </>
  );
}
