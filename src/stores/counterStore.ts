import { create } from "zustand";

type CounterState = {
  basicCount: number;
  basicIncrement: () => void;
  basicDecrement: () => void;
  basicReset: () => void;
  adjustableCount: number;
  adjustableIncrement: () => void;
  adjustableDecrement: () => void;
  adjustableReset: () => void;
  adjustableStep: number;
  adjustableSetStep: (step: number) => void;
};

export const useCounterStore = create<CounterState>((set) => ({
  basicCount: 0,
  basicIncrement: () => set((state) => ({ basicCount: state.basicCount + 1 })),
  basicDecrement: () =>
    set((state) => ({ basicCount: Math.max(0, state.basicCount - 1) })),
  basicReset: () => set({ basicCount: 0 }),
  adjustableCount: 0,
  adjustableIncrement: () =>
    set((state) => ({
      adjustableCount: state.adjustableCount + state.adjustableStep,
    })),
  adjustableDecrement: () =>
    set((state) => ({
      adjustableCount: Math.max(
        0,
        state.adjustableCount - state.adjustableStep,
      ),
    })),
  adjustableReset: () => set({ adjustableCount: 0 }),
  adjustableStep: 1,
  adjustableSetStep: (step: number) => set({ adjustableStep: step }),
}));
