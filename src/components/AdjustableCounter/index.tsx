import { CounterContext } from "@/contexts/CounterContext";
import { useContext } from "react";

export const AdjustableCounter = () => {
  const { adjustable, adjustableDispatch } = useContext(CounterContext);
  return (
    <>
      <h2>調整可能なカウンター</h2>
      <p>現在の値: {adjustable.count}</p>
      <input
        type="number"
        value={adjustable.step}
        onChange={(e) =>
          adjustableDispatch({ type: "SET_STEP", step: Number(e.target.value) })
        }
        min={1}
      />
      <button onClick={() => adjustableDispatch({ type: "INCREMENT" })}>
        +{adjustable.step}
      </button>
      <button
        onClick={() => adjustableDispatch({ type: "DECREMENT" })}
        disabled={adjustable.count <= adjustable.step}
      >
        -{adjustable.step}
      </button>
      <button onClick={() => adjustableDispatch({ type: "RESET" })}>
        リセット
      </button>
    </>
  );
};
