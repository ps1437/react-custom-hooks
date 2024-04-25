function useDebounceCode() {
    return `
    import { useState, useEffect } from 'react';

    function useDebounce(value, delay) {
      const [debouncedValue, setDebouncedValue] = useState(value);
    
      useEffect(() => {
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);
    
        // Cleanup function runs if value or delay changes before the timeout is reached
        return () => {
          clearTimeout(handler);
        };
      }, [value, delay]); 
    
      return debouncedValue;
    }
    
    export default useDebounce;
    


`;
}

export default useDebounceCode;