import React from 'react';
import useTimerCode from '../hooksCode/useTimerCode';
import Timer from '../../ui/Timer';

function UseTimerSection({ handleClick, renderComponent }) {

  return (

    <div className="hook-section" onClick={() => {
      handleClick(useTimerCode);
      renderComponent(<Timer />)

    }}>
      <span className="hook-heading">useTimerCode</span>
      <p className="hook-description">A custom hook for managing a timer.</p>

    </div>
  );
}

export default UseTimerSection;
