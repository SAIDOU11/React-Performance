import Parent from './Parent.jsx';

const GrandParent = ({ count }) => {
  console.log('[👴🏼]   [ ]   [ ]   [ ] rendered');
  return (
    <div className="grandparent">
      <p>GrandParent Component. Count: {count}</p>
      <Parent />
      <Parent />
    </div>
  );
};

export default GrandParent;
