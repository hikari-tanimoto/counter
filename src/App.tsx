import { AdjustableCounter } from "@/components/AdjustableCounter";
import { BasicCounter } from "@/components/BasicCounter";
import { CounterProvider } from "@/contexts/CounterContext";
import { adjustableReducer } from "@/reducers/adjustableReducer";
import { basicReducer } from "@/reducers/basicReducer";
import { useReducer } from "react";

type State = {
  basic: { count: number };
  adjustable: { count: number; step: number };
};

const initialState: State = {
  basic: { count: 0 },
  adjustable: { count: 0, step: 1 },
};

function App() {
  const [basicState, basicDispatch] = useReducer(
    basicReducer,
    initialState.basic,
  );
  const [adjustableState, adjustableDispatch] = useReducer(
    adjustableReducer,
    initialState.adjustable,
  );

  return (
    <div>
      <h1>カウンター</h1>
      <h2>カウンターの合計値：{basicState.count + adjustableState.count}</h2>
      <CounterProvider
        value={{
          basic: basicState,
          adjustable: adjustableState,
          basicDispatch,
          adjustableDispatch: adjustableDispatch,
        }}
      >
        <BasicCounter />
        <AdjustableCounter />
      </CounterProvider>
    </div>
  );
}

export default App;
