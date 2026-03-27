import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [stepCount, setStepCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div>
      <h1>カウンター</h1>
      <h2>カウンターの合計値：{count + stepCount}</h2>
      <h2>基本カウンター</h2>
      <p>現在の値: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>リセット</button>
      <h2>ステップカウンター{step}ずつ増減</h2>
      <p>現在の値: {stepCount}</p>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <button onClick={() => setStepCount(stepCount + step)}>+{step}</button>
      <button onClick={() => setStepCount(stepCount - step)}>-{step}</button>
    </div>
  );
}

export default App;
