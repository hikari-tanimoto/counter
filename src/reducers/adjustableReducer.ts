export type AdjustableAction =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "RESET" }
  | { type: "SET_STEP"; step: number };

export function adjustableReducer(
  state: { count: number; step: number },
  action: AdjustableAction,
): { count: number; step: number } {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + state.step, step: state.step };
    case "DECREMENT":
      return { count: Math.max(0, state.count - state.step), step: state.step };
    case "RESET":
      return { count: 0, step: state.step };
    case "SET_STEP":
      return { count: state.count, step: action.step };
    default:
      return state;
  }
}
