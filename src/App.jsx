import { useState } from 'react';
import GrandParent from './GrandParent.jsx';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  console.log('[GP] [P] [C] [GC] APP rendered. ');

  return (
    <div>
      <button onClick={decrement}>-1</button>
      <button onClick={increment}>+1</button>
      <h2>{count}</h2>
      <GrandParent count={count} />
      <GrandParent />
    </div>
  );
};

export default App;
