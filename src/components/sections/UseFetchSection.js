import React from 'react';
import useFetchCode from '../hooksCode/useFetchCode';
import FetchComponent from '../../ui/FetchComponent';


function UseFetchSection({handleClick,renderComponent}) {

  return (
    <div className="hook-section" onClick={()=>{
      handleClick(useFetchCode);
      renderComponent(<FetchComponent/>)

      }}>
      <span className="hook-heading">useFetch</span>
      <p className="hook-description">A custom hook for fetching data from an API.</p>
    </div>
  );
}

export default UseFetchSection;
