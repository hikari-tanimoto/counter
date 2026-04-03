import {
  adjustableCountAtom,
  adjustableStepAtom,
} from "@/atoms/counterAtoms";
import { useAtom } from "jotai";

export const AdjustableCounter = () => {
  const [count, setCount] = useAtom(adjustableCountAtom);
  const [step, setStep] = useAtom(adjustableStepAtom);
  return (
    <>
      <h2>調整可能なカウンター</h2>
      <p>現在の値: {count}</p>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
        min={1}
      />
      <button onClick={() => setCount((c) => c + step)}>+{step}</button>
      <button
        onClick={() => setCount((c) => Math.max(0, c - step))}
        disabled={count <= step}
      >
        -{step}
      </button>
      <button onClick={() => setCount(0)}>リセット</button>
    </>
  );
};
