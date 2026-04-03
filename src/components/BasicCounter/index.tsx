import { useCounterStore } from "@/stores/counterStore";
export const BasicCounter = () => {
  const { basicCount, basicIncrement, basicDecrement, basicReset } =
    useCounterStore();
  return (
    <>
      <h2>基本カウンター</h2>
      <p>現在の値: {basicCount}</p>
      <button onClick={basicIncrement}>+1</button>
      <button onClick={basicDecrement} disabled={basicCount <= 0}>
        -1
      </button>
      <button onClick={basicReset}>リセット</button>
    </>
  );
};
