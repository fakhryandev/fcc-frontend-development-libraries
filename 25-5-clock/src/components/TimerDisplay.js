const TimerDisplay = (props) => {
  let currMin = Math.floor(props.timer / 60);
  let currSec = props.timer % 60;

  if (currMin < 10) {
    currMin = "0".concat(currMin.toString());
  } else {
    currMin = currMin.toString();
  }

  if (currSec < 10) {
    currSec = "0".concat(currSec.toString());
  } else {
    currSec = currSec.toString();
  }

  let currTime = currMin.concat(":").concat(currSec);

  return (
    <div className="wrapper">
      <div id="timer-label">{props.break ? "Break" : "Session"}</div>
      <div id="time-left">{currTime}</div>
      <div>
        <button id="start_stop" onClick={props.startStop}>
          {props.timerOn ? "Pause" : "Play"}
        </button>
        <button id="reset" onClick={props.reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default TimerDisplay;
