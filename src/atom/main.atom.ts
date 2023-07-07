import { atom, createStore } from "jotai";
import { loadable } from "jotai/utils";

const YES = "Y";
const NO = "N";

type Loadable<T> =
  | {
      state: "hasData";
      data: T;
    }
  | {
      state: "loading";
    }
  | {
      state: "hasError";
      error: Error;
    };

interface IData {
  ORGAN_CD: string;
  ORGAN_NM: string;
  USER_ID: string;
  USER_NM: string;
  GENDER: string;
  HP_NO: string;
  EMAIL: string;
  PHOTO: string;
  AUTH_MSG: typeof YES | typeof NO;
  AUTH_RECODE: typeof YES | typeof NO;
}

export interface IDataState {
  success: boolean;
  error: string | Error | null;
  message: string | null;
  data: IData[];
}

export const mainStore = createStore();

// mainStore.sub(counterAtom, () => {
//   console.log("counterAtom changed", mainStore.get(counterAtom));
// });

export const counterAtom = atom(0);
counterAtom.debugLabel = "counterAtom";

export const getPromiseDataState = atom(async (_get) => {
  const response = await fetch("http://localhost:5000/owner", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "jeongbin",
    }),
  }).then((res) => res.json());

  return response;
});

export const loadableGetPromiseDataState =
  loadable<Promise<IDataState>>(getPromiseDataState);

getPromiseDataState.debugLabel = "getPromiseDataState";
