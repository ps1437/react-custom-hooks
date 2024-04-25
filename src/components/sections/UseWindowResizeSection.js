import React from 'react';
import useWindowResizeCode from '../hooksCode/useWindowResizeCode';
import WindowResize from '../../ui/WindowResize';

function UseWindowResizeSection({handleClick,renderComponent}) {
  return (
    <div className="hook-section" onClick={()=>{
      handleClick(useWindowResizeCode);
      renderComponent(<WindowResize/>)

      }}>
      <span className="hook-heading">useWindowResize</span>
      <p className="hook-description">A custom hook for subscribing to window resize events and getting the current window dimensions.</p>
    </div>
  );
}

export default UseWindowResizeSection;
