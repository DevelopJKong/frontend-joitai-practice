import { useAtom, useAtomValue } from "jotai";
import { counterAtom, loadableGetPromiseDataState } from "./atom/main.atom";

function App() {
  const [counter, setCounter] = useAtom(counterAtom);
  const asyncAtom = useAtomValue(loadableGetPromiseDataState);

  if (asyncAtom.state === "hasData") {
    console.log(asyncAtom.data);
  }

  const onCounter = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <>
      <div>hello</div>
      <button type="button" onClick={onCounter}>
        {counter}
      </button>
      <div>{JSON.stringify(asyncAtom, null, 2)}</div>
    </>
  );
}

export default App;
