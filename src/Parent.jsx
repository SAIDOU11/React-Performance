import Child from './Child.jsx';
import sleep from './utils.jsx';

const Parent = () => {
  sleep(30);
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
