import React from 'react';
import Offline from '../../ui/Offline';
import useOfflineCode from '../hooksCode/useOfflineCode';

function UseDebounceSection({ handleClick, renderComponent }) {

  return (
    <div className="hook-section" onClick={()=>{
      handleClick(useOfflineCode);
      renderComponent(<Offline/>)
    }}>
      <span className="hook-heading">useOffline</span>
      <p className="hook-description">A custom hook to detect the online/offline status of the user.</p>
    </div>
  );
}

export default UseDebounceSection;
