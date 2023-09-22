import sleep from './utils.jsx';

const GrandChild = () => {
  sleep(30);
  console.log('[ ]  [ ]  [ ]  [👶🏻] rendered');
  return (
    <div className="grandchild">
      <p>GrandChild Component</p>
    </div>
  );
};

export default GrandChild;
