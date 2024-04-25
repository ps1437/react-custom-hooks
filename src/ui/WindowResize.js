import React from 'react';
import useWindowResize from '../Hooks/useWindowResize';

function WindowResize() {
  const { width, height } = useWindowResize();

  return (
    <div>
      <h1>Window Size</h1>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
}

export default WindowResize;
