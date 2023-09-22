import GrandChild from './GrandChild.jsx';
import sleep from './utils.jsx';

const Child = () => {
  sleep(30);
  console.log('[ ]   [ ]   [🧒🏻]   [ ] rendered');
  return (
    <div className="child">
      <p>Child Component</p>
      <GrandChild />
      <GrandChild />
    </div>
  );
};

export default Child;
