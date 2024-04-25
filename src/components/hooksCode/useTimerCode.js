function useTimerCode() {
    return `
import { useState, useEffect } from 'react';

function useTimer(initialTime = 0) {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTime(0);
  };

  return {
    time,
    isRunning,
    startTimer,
    stopTimer,
    resetTimer,
  };
}

export default useTimer;


----------------------------------------------------
                       Usage
----------------------------------------------------  

const { time, isRunning, startTimer, stopTimer, resetTimer } = UseTimer();

`;
}

export default useTimerCode;