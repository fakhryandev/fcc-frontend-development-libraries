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
  const [timerInterval, setTimerInterval] = useState(null);

  const handleReset = () => {
    setTimerOn(false);
    setBreakState(false);
    setTimer(1500);
    setBreakTime(5);
    setSessionTime(25);

    clearInterval(timerInterval);
    setTimerInterval(null);

    let beep = document.getElementById("beep");
    beep.pause();
    beep.currentTime = 0;
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
            const newBreak = breakTime + 1;
            setBreakTime(newBreak);
            setTimer(newBreak * 60);
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
            const newBreak = breakTime - 1;
            setBreakTime(newBreak);
            setTimer(newBreak * 60);
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
    if (timer < 0) {
      let beep = document.getElementById("beep");
      beep.play();
      beep.currentTime = 0;
      setBreakState(!breakState);
      const nextTimerLength = breakState ? breakTime : sessionTime;
      setTimer(nextTimerLength * 60);
    }
  }, [timer, breakState, breakTime, sessionTime]);

  useEffect(() => {
    setTimer(sessionTime * 60);
  }, [sessionTime]);

  return (
    <div className="min-h-screen bg-cyan-700 flex flex-col justify-center items-center text-white">
      <div className="py-32 px-56">
        <p className="text-center text-6xl">25 + 5 Clock</p>
        <div className="flex flex-col gap-5 mt-8">
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
      </div>
    </div>
  );
};

export default App;
