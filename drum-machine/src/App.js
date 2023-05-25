import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [activeKey, setActiveKey] = useState("");

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      const key = event.key;
      playSound(key.toUpperCase());
    });
  });

  const drumPads = [
    {
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      keyCode: 81,
      alias: "Heater 1",
    },
    {
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      keyCode: 87,
      alias: "Heater 2",
    },
    {
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      keyCode: 69,
      alias: "Heater 3",
    },
    {
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      keyCode: 65,
      alias: "Heater 4",
    },
    {
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      keyCode: 83,
      alias: "Clap",
    },
    {
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      keyCode: 68,
      alias: "Open HH",
    },
    {
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      keyCode: 90,
      alias: "Kick n' Hat",
    },
    {
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      keyCode: 88,
      alias: "Kick",
    },
    {
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      keyCode: 67,
      alias: "Closed HH",
    },
  ];

  const playSound = (selector) => {
    const isValid = drumPads.some((drumpPad) => drumpPad.text === selector);

    if (isValid) {
      const audio = document.getElementById(selector);
      const pad = drumPads.find((x) => x.text === selector.toUpperCase());

      setActiveKey(pad.alias);
      audio.play();
    }
  };

  return (
    <div className="flex gap-10" id="drum-machine">
      <div className="grid grid-cols-3 gap-4">
        {drumPads.map((drumPad) => (
          <div
            key={drumPad.keyCode}
            className="drum-pad py-4 px-5 rounded-md bg-gray-600 text-white text-center text-lg font-bold"
            id={drumPad.keyCode}
            onClick={() => playSound(drumPad.text)}
          >
            {drumPad.text}
            <audio className="clip" src={drumPad.src} id={drumPad.text}></audio>
          </div>
        ))}
      </div>
      <div className="flex items-center w-[200px] bg-gray-600 h-10 py-4 justify-center self-center rounded-md">
        <p className="text-white text-lg font-bold" id="display">
          {activeKey}
        </p>
      </div>
    </div>
  );
}

export default App;
