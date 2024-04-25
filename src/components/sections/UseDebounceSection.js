import React from 'react';
import Debounce from '../../ui/Debounce';
import useDebounceCode from '../hooksCode/useDebounceCode';

function UseDebounceSection({ handleClick, renderComponent }) {

  return (
    <div className="hook-section" onClick={()=>{
      handleClick(useDebounceCode);
      renderComponent(<Debounce/>)
    }}>
      <span className="hook-heading">useDebounce</span>
      <p className="hook-description">A custom hook for debouncing user input.</p>
    </div>
  );
}

export default UseDebounceSection;
