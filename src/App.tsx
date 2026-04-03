import { AdjustableCounter } from "@/components/AdjustableCounter";
import { BasicCounter } from "@/components/BasicCounter";
import { totalAtom } from "@/atoms/counterAtoms";
import { useAtomValue } from "jotai";

function App() {
  const total = useAtomValue(totalAtom);

  return (
    <div>
      <h1>カウンター</h1>
      <h2>カウンターの合計値：{total}</h2>
      <BasicCounter />
      <AdjustableCounter />
    </div>
  );
}

export default App;
