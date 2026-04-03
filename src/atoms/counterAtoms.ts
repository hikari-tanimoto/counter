import { atom } from "jotai";

export const basicCountAtom = atom(0);

export const adjustableCountAtom = atom(0);
export const adjustableStepAtom = atom(1);

export const totalAtom = atom(
  (get) => get(basicCountAtom) + get(adjustableCountAtom),
);
