import { AdjustableCounter } from "@/components/AdjustableCounter";
import { BasicCounter } from "@/components/BasicCounter";
import { useCounterStore } from "@/stores/counterStore";

function App() {
  const { basicCount, adjustableCount } = useCounterStore();

  return (
    <div>
      <h1>カウンター</h1>
      <h2>カウンターの合計値：{basicCount + adjustableCount}</h2>
      <BasicCounter />
      <AdjustableCounter />
    </div>
  );
}

export default App;
