// useWindowResizeCode.js
function useWindowResizeCode() {
    return `
    import { useState, useEffect } from 'react';
  
    function useWindowResize() {
      const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
      });
  
      useEffect(() => {
        const handleResize = () => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
          });
        };
  
        window.addEventListener('resize', handleResize);
  
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
  
      return windowSize;
    }
  
    export default useWindowResize;
   
----------------------------------------------------
                       Usage
----------------------------------------------------  

const { width, height } = useWindowResize(); // Call the useWindowResize hook
   
    `;
  }
  
  export default useWindowResizeCode;
  