import { useReducer } from "react";

type State = {
  count: number;
  stepCount: number;
  step: number;
};

type Action =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "RESET" }
  | { type: "STEP_INCREMENT" }
  | { type: "STEP_DECREMENT" }
  | { type: "STEP_RESET" }
  | { type: "STEP_SET"; step: number };

const initialState: State = {
  count: 0,
  stepCount: 0,
  step: 1,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: 0 };
    case "STEP_INCREMENT":
      return { ...state, stepCount: state.stepCount + state.step };
    case "STEP_DECREMENT":
      return { ...state, stepCount: state.stepCount - state.step };
    case "STEP_RESET":
      return { ...state, stepCount: 0 };
    case "STEP_SET":
      return { ...state, step: action.step };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>カウンター</h1>
      <h2>カウンターの合計値：{state.count + state.stepCount}</h2>
      <h2>基本カウンター</h2>
      <p>現在の値: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
      <button onClick={() => dispatch({ type: "RESET" })}>リセット</button>
      <h2>ステップカウンター{state.step}ずつ増減</h2>
      <p>現在の値: {state.stepCount}</p>
      <input
        type="number"
        value={state.step}
        onChange={(e) =>
          dispatch({ type: "STEP_SET", step: Number(e.target.value) })
        }
      />
      <button onClick={() => dispatch({ type: "STEP_INCREMENT" })}>
        +{state.step}
      </button>
      <button onClick={() => dispatch({ type: "STEP_DECREMENT" })}>
        -{state.step}
      </button>
      <button onClick={() => dispatch({ type: "STEP_RESET" })}>リセット</button>
    </div>
  );
}

export default App;
