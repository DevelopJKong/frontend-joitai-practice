import { atom, createStore } from "jotai";

export const mainStore = createStore();

// mainStore.sub(counterAtom, () => {
//   console.log("counterAtom changed", mainStore.get(counterAtom));
// });

export const counterAtom = atom(0);
counterAtom.debugLabel = "counterAtom";
