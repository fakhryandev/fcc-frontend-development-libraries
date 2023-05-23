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
    },
    {
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      keyCode: 87,
    },
    {
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      keyCode: 69,
    },
    {
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      keyCode: 65,
    },
    {
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      keyCode: 83,
    },
    {
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      keyCode: 68,
    },
    {
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      keyCode: 90,
    },
    {
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      keyCode: 88,
    },
    {
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      keyCode: 67,
    },
  ];

  const playSound = (selector) => {
    const isValid = drumPads.some((drumpPad) => drumpPad.text === selector);

    if (isValid) {
      const audio = document.getElementById(selector);
      setActiveKey(selector);
      audio.play();
    }
  };

  return (
    <div className="App d-flex" id="drum-machine">
      <div className="drumpad-wrapper">
        {drumPads.map((drumPad) => (
          <div
            key={drumPad.keyCode}
            className="drum-pad"
            id={drumPad.keyCode}
            onClick={() => playSound(drumPad.text)}
          >
            {drumPad.text}
            <audio className="clip" src={drumPad.src} id={drumPad.text}></audio>
          </div>
        ))}
      </div>
      <div id="display">
        <p>{activeKey}</p>
      </div>
    </div>
  );
}

export default App;
