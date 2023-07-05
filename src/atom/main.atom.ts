import { atom, createStore } from "jotai";

export const mainStore = createStore();

export const counterAtom = atom(0);
counterAtom.debugLabel = "counterAtom";

mainStore.sub(counterAtom, () => {
  console.log("counterAtom changed", mainStore.get(counterAtom));
});
