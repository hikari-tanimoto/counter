import { basicCountAtom } from "@/atoms/counterAtoms";
import { useAtom } from "jotai";

export const BasicCounter = () => {
  const [count, setCount] = useAtom(basicCountAtom);
  return (
    <>
      <h2>基本カウンター</h2>
      <p>現在の値: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <button
        onClick={() => setCount((c) => Math.max(0, c - 1))}
        disabled={count <= 0}
      >
        -1
      </button>
      <button onClick={() => setCount(0)}>リセット</button>
    </>
  );
};
