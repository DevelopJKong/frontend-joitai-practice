import { useAtom, useAtomValue } from 'jotai';
import { countReducerAtom, loadableGetPromiseDataState } from './atom/main-atom';

function App() {
  const [counter, dispatch] = useAtom(countReducerAtom);
  const asyncAtom = useAtomValue(loadableGetPromiseDataState);

  if (asyncAtom.state === 'hasData') {
    console.log(asyncAtom.data);
  }

  const onCounter = () => {
    dispatch({ type: 'set', payload: counter + 1 });
  };
  return (
    <>
      <div>hello</div>
      <button type='button' onClick={onCounter}>
        {counter}
      </button>
      <div>{JSON.stringify(asyncAtom, null, 2)}</div>
    </>
  );
}

export default App;
