# React Custom hooks

### 1. useDebounce

#### Description
A custom React hook for debouncing a value, delaying updates until a specified time has passed without further changes.

#### Parameters
- `value`: The value to debounce.
- `delay`: The delay in milliseconds before the debounced value is updated.

#### Usage
```javascript
import React, { useState } from 'react';
import useDebounce from './useDebounce';

const MyComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>Debounced value: {debouncedValue}</p>
    </div>
  ); 
};
```

### 2. useFetch

#### Description
A custom React hook for fetching data from an API.

#### Parameters
- `url`: The URL of the API endpoint.

#### Usage
```javascript
import React from 'react';
import useFetch from './useFetch';

const MyComponent = () => {
  const { loading, error, data } = useFetch('https://api.example.com/data');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div>{JSON.stringify(data)}</div>;
};
```
### 3. useWindowResize

#### Description
A custom React hook for handling window resize events.

#### Usage
```javascript
import React, { useState, useEffect } from 'react';
import useWindowResize from './useWindowResize';

const MyComponent = () => {
  const windowSize = useWindowResize();

  return (
    <div>
      <p>Window width: {windowSize.width}</p>
      <p>Window height: {windowSize.height}</p>
    </div>
  );
};
```
### 4. useTimer

#### Description
A custom React hook for handling timing functionalities such as countdowns or periodic tasks.

#### Parameters
- `initialTime`: The initial time value for the timer. Default is `0`.

#### Usage
```javascript
import React from 'react';
import useTimer from './useTimer';

const MyTimerComponent = () => {
  const { time, isRunning, startTimer, stopTimer, resetTimer } = useTimer();

  return (
    <div>
      <p>Time: {time}</p>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
      <button onClick={resetTimer}>Reset Timer</button>
    </div>
  );
};
```

