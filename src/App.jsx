import { useEffect, useMemo, useState } from 'react';
import GrandParent from './GrandParent.jsx';

const App = () => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const style = useMemo(() => {
    return {
      backgroundColor: darkMode ? '#2b283a' : '#e9e3ff',
      color: darkMode ? '#e9e3ff' : '#2b283a',
    };
  }, [darkMode]);

  useEffect(() => {
    console.log('Style changed');
  }, [style]);

  console.log('[GP] [P] [C] [GC] APP rendered. ');

  return (
    <div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <h2>Count : {count}</h2>
      <button onClick={() => setDarkMode((prev) => !prev)}>
        {darkMode ? 'Switch to Light' : 'Switch to Dark'}
      </button>
      <p>App Component</p>
      <GrandParent style={style} />
      <GrandParent />
    </div>
  );
};

export default App;
