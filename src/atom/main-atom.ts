import { atom, createStore } from 'jotai';
import { atomWithLazy, atomWithReducer, loadable } from 'jotai/utils';

const YES = 'Y';
const NO = 'N';

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
counterAtom.debugLabel = 'counterAtom';

export const getPromiseDataState = atom(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());

  return response;
});

export const loadableGetPromiseDataState = loadable<Promise<IDataState>>(getPromiseDataState);

getPromiseDataState.debugLabel = 'getPromiseDataState';

const countReducer = (prev: number, action: { type: 'inc' | 'dec' | 'set'; payload?: number }) => {
  const actionTypeMap = {
    inc: prev + 1,
    dec: prev - 1,
    set: action.payload ?? 0,
  };

  return actionTypeMap[action.type];
};

export const countReducerAtom = atomWithReducer(0, countReducer);

const initializeExpensiveImage = async () => {
  const response = await fetch('https://picsum.photos/200/300', { mode: 'cors' });
  const blob = await response.blob();
  const url = URL.createObjectURL(blob);
  return url;
};

export const videoDataAtom = atomWithLazy(initializeExpensiveImage);
