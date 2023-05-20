const TimerSetting = (props) => {
  return (
    <div className="flex gap-24">
      <div className="flex flex-col items-center">
        <div id="break-label" className="text-3xl">
          Break Length
        </div>
        <div className="flex gap-5">
          <button
            id="break-decrement"
            onClick={(e) => {
              props.decrement("break");
            }}
          >
            <i className="fa fa-arrow-down text-2xl"></i>
          </button>
          <span id="break-length" className="text-2xl">
            {props.breakTime}
          </span>
          <button
            id="break-increment"
            onClick={(e) => {
              props.increment("break");
            }}
          >
            <i className="fa fa-arrow-up text-2xl"></i>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div id="session-label" className="text-3xl">
          Session Length
        </div>
        <div className="flex gap-5">
          <button
            id="session-decrement"
            onClick={(e) => {
              props.decrement("session");
            }}
          >
            <i className="fa fa-arrow-down text-2xl"></i>
          </button>
          <span id="session-length" className="text-2xl">
            {props.sessionTime}
          </span>
          <button
            id="session-increment"
            onClick={(e) => {
              props.increment("session");
            }}
          >
            <i className="fa fa-arrow-up text-2xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimerSetting;
