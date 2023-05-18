const TimerSetting = (props) => {
  return (
    <div className="wrapper">
      <div className="row">
        <div className="col-6">
          <div id="break-label">Break Length</div>
          <div>
            <button
              id="break-decrement"
              onClick={(e) => {
                props.decrement("break");
              }}
            >
              -
            </button>
            <span id="break-length">{props.breakTime}</span>
            <button
              id="break-increment"
              onClick={(e) => {
                props.increment("break");
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="col-6">
          <div id="session-label">Session Length</div>
          <div>
            <button
              id="session-decrement"
              onClick={(e) => {
                props.decrement("session");
              }}
            >
              -
            </button>
            <span id="session-length">{props.sessionTime}</span>
            <button
              id="session-increment"
              onClick={(e) => {
                props.increment("session");
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerSetting;
