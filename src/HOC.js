import React, { useState } from 'react'

export default function withClickCounter(WrappedComponent) {
    return function WithClickCounter(props) {
        const [count, setCount] = useState(0);
    
        const handleClick = () => {
          setCount(count + 1);
        };
    
        return (
          <div>
            <WrappedComponent {...props} onClick={handleClick} />
            <p>Clicked {count} times</p>
          </div>
        );
      };
}
