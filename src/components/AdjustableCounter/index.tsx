import { useCounterStore } from "@/stores/counterStore";

export const AdjustableCounter = () => {
  const {
    adjustableCount,
    adjustableIncrement,
    adjustableDecrement,
    adjustableReset,
    adjustableStep,
    adjustableSetStep,
  } = useCounterStore();
  return (
    <>
      <h2>調整可能なカウンター</h2>
      <p>現在の値: {adjustableCount}</p>
      <input
        type="number"
        value={adjustableStep}
        onChange={(e) => adjustableSetStep(Number(e.target.value))}
        min={1}
      />
      <button onClick={adjustableIncrement}>+{adjustableStep}</button>
      <button
        onClick={adjustableDecrement}
        disabled={adjustableCount <= adjustableStep}
      >
        -{adjustableStep}
      </button>
      <button onClick={adjustableReset}>リセット</button>
    </>
  );
};
