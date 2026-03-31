import { CounterContext } from "@/contexts/CounterContext";
import { useContext } from "react";
export const BasicCounter = () => {
  const { basic, basicDispatch } = useContext(CounterContext);
  return (
    <>
      <h2>基本カウンター</h2>
      <p>現在の値: {basic.count}</p>
      <button onClick={() => basicDispatch({ type: "INCREMENT" })}>+1</button>
      <button
        onClick={() => basicDispatch({ type: "DECREMENT" })}
        disabled={basic.count <= 0}
      >
        -1
      </button>
      <button onClick={() => basicDispatch({ type: "RESET" })}>リセット</button>
    </>
  );
};
