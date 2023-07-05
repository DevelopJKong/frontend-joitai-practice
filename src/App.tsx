import { useAtom } from "jotai";
import { counterAtom } from "./atom/main.atom";

function App() {
  const [counter, setCounter] = useAtom(counterAtom);

  const onCounter = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <>
      <div>hello</div>
      <button type="button" onClick={onCounter}>
        {counter}
      </button>
    </>
  );
}

export default App;
