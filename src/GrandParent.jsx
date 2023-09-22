import { memo } from 'react';
import Parent from './Parent.jsx';
import sleep from './utils.jsx';

const GrandParent = ({ style }) => {
  sleep(30);
  console.log('[👴🏼]   [ ]   [ ]   [ ] rendered');
  return (
    <div className="grandparent" style={style}>
      <p>GrandParent Component.</p>
      <Parent />
      <Parent />
    </div>
  );
};

export default memo(GrandParent);
