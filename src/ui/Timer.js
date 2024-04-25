import React from 'react';
import useTimer from '../Hooks/useTimer';

function Timer() {
  const { time, isRunning, startTimer, stopTimer, resetTimer } = useTimer();

  return (

    <>
      <span> Running : {""+isRunning}</span>
      <p>Time: {time}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </>
  )
}

export default Timer;
