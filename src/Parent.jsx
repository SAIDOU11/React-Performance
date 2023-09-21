import Child from './Child.jsx';

const Parent = () => {
  console.log('[ ]   [👩🏼‍⚕️]   [ ]   [ ] rendered');
  return (
    <div className="parent">
      <p>Parent Component</p>
      <Child />
      <Child />
    </div>
  );
};

export default Parent;
