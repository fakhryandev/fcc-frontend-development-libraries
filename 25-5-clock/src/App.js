import "./App.css";
import TimerSetting from "components/TimeSetting";
import TimerDisplay from "components/TimerDisplay";
import { useEffect, useState } from "react";

const App = () => {
  const [breakState, setBreakState] = useState(false);
  const [timerOn, setTimerOn] = useState(false);
  const [timer, setTimer] = useState(1500);
  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  // const [startStop, setStartStop] = useState(false);
  const [timerInterval, setTimerInterval] = useState(null);

  const handleReset = () => {
    setTimerOn(false);
    setBreakState(false);
    setTimer(1500);
    setBreakTime(5);
    setSessionTime(25);

    clearInterval(timerInterval);
    setTimerInterval(null);
  };

  const increment = (timerType) => {
    if (!timerOn) {
      switch (timerType) {
        case "session":
          if (sessionTime < 60) {
            const newSession = sessionTime + 1;
            setSessionTime(newSession);
            setTimer(newSession * 60);
          }
          break;
        case "break":
          if (breakTime < 60) {
            setBreakTime(breakTime + 1);
          }
          break;
        default:
          break;
      }
    }
  };

  const decrement = (timerType) => {
    if (!timerOn) {
      switch (timerType) {
        case "session":
          if (sessionTime > 1) {
            const newSession = sessionTime - 1;
            setSessionTime(newSession);
            setTimer(newSession * 60);
          }
          break;
        case "break":
          if (breakTime > 1) {
            setBreakTime(breakTime - 1);
          }
          break;
        default:
          break;
      }
    }
  };

  const handleStartStop = () => {
    setTimerOn(!timerOn);
  };

  useEffect(() => {
    if (timerOn) {
      setTimerInterval(
        setInterval(() => {
          setTimer((prevTimeLeft) => prevTimeLeft - 1);
        }, 1000)
      );
    } else {
      clearInterval(timerInterval);
      setTimerInterval(null);
    }
  }, [timerOn]);

  useEffect(() => {
    if (timer === 0) {
      setBreakState(!breakState);
      const nextTimerLength = breakState ? breakTime : sessionTime;
      setTimer(nextTimerLength * 60);
    }
  }, [timer]);

  useEffect(() => {
    setTimer(sessionTime * 60);
  }, [sessionTime]);

  return (
    <div className="container text-center">
      <TimerSetting
        breakTime={breakTime}
        sessionTime={sessionTime}
        increment={increment}
        decrement={decrement}
      />
      <TimerDisplay
        break={breakState}
        reset={handleReset}
        timerOn={timerOn}
        timer={timer}
        startStop={handleStartStop}
      />
    </div>
  );
};

export default App;
