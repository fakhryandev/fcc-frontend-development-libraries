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
    <div className="flex flex-col justify-center items-center gap-3">
      <div className="border-8 border-cyan-900 rounded-3xl text-center py-8 px-16 w-[300px]">
        <div id="timer-label" className="text-3xl">
          {props.break ? "Break" : "Session"}
        </div>
        <div id="time-left" className="text-6xl">
          {currTime}
        </div>
      </div>
      <div className="flex flex-row gap-5">
        <button id="start_stop" onClick={props.startStop}>
          {props.timerOn ? (
            <i className="fa fa-pause text-2xl"></i>
          ) : (
            <i className="fa fa-play text-2xl"></i>
          )}
        </button>
        <button id="reset" onClick={props.reset}>
          <i className="fa fa-refresh text-2xl"></i>
        </button>
      </div>
      <audio
        id="beep"
        src="http://www.trekcore.com/audio/computer/hailalert_1.mp3"
      />
    </div>
  );
};

export default TimerDisplay;
