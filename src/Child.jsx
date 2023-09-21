import GrandChild from './GrandChild.jsx';

const Child = () => {
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
