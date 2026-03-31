import { type AdjustableAction } from "@/reducers/adjustableReducer";
import { type BasicAction } from "@/reducers/basicReducer";
import { createContext } from "react";

type State = {
  basic: { count: number };
  adjustable: { count: number; step: number };
};

export const CounterContext = createContext<{
  basic: State["basic"];
  adjustable: State["adjustable"];
  basicDispatch: React.Dispatch<BasicAction>;
  adjustableDispatch: React.Dispatch<AdjustableAction>;
}>({
  basic: { count: 0 },
  adjustable: { count: 0, step: 1 },
  basicDispatch: () => {},
  adjustableDispatch: () => {},
});

export const CounterProvider = CounterContext.Provider;
