export type BasicAction =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "RESET" };

export function basicReducer(
  state: { count: number },
  action: BasicAction,
): { count: number } {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: Math.max(0, state.count - 1) };
    case "RESET":
      return { ...state, count: 0 };
    default:
      return state;
  }
}
