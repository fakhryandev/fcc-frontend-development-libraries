import { useEffect, useState } from "react";
import Display from "./components/Display";
import Keyboard from "./components/Keyboard";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operators = ["AC", "/", "x", "+", "-", "="];

function App() {
  const [input, setInput] = useState("0");
  const [output, setOutput] = useState("0");
  const [calculatorData, setCalculatorData] = useState("");

  const handleSubmit = () => {
    const total = eval(calculatorData);
    setInput(total);
    setOutput(`${total} = ${total}`);
    setCalculatorData(`${total}`);
  };

  const handleClear = () => {
    setInput("0");
    setCalculatorData("");
  };

  const handleNumbers = (value) => {
    if (!calculatorData.length) {
      setInput(`${value}`);
      setCalculatorData(`${value}`);
    } else {
      if (value === 0 && (calculatorData === "0" || input === "0")) {
        setCalculatorData(`${calculatorData}`);
      } else {
        const lastChar = calculatorData.charAt(calculatorData.length - 1);
        const isLastChatOperator =
          lastChar === "*" || operators.includes(lastChar);

        setInput(isLastChatOperator ? `${value}` : `${input}${value}`);
        setCalculatorData(`${calculatorData}${value}`);
      }
    }
  };

  const handleOperators = (value) => {
    if (calculatorData.length) {
      setInput(`${value}`);
      const beforeLastChar = calculatorData.charAt(calculatorData.length - 2);
      const beforeLastCharIsOperator =
        operators.includes(beforeLastChar) || beforeLastChar === "*";

      const lastChar = calculatorData.charAt(calculatorData.length - 1);
      const lastCharIsOperator =
        operators.includes(lastChar) || lastChar === "*";

      const validOp = value === "x" ? "*" : value;
      if (
        (lastCharIsOperator && value !== "-") ||
        (beforeLastCharIsOperator && lastCharIsOperator)
      ) {
        if (beforeLastCharIsOperator) {
          const updatedValue = `${calculatorData.substring(
            0,
            calculatorData.length - 2
          )}${value}`;
          setCalculatorData(updatedValue);
        } else {
          setCalculatorData(
            `${calculatorData.substring(
              0,
              calculatorData.length - 1
            )}${validOp}`
          );
        }
      } else {
        setCalculatorData(`${calculatorData}${validOp}`);
      }
    }
  };

  const dotOperator = () => {
    const lastChar = calculatorData.charAt(calculatorData.length - 1);
    if (!calculatorData.length) {
      setInput("0.");
      setCalculatorData("0.");
    } else {
      if (lastChar === "*" || operators.includes(lastChar)) {
        setInput("0.");
        setCalculatorData(`${calculatorData} 0.`);
      } else {
        setInput(
          lastChar === "." || input.includes(".") ? `${input}` : `${input}.`
        );

        const formattedValue =
          lastChar === "." || input.includes(".")
            ? `${calculatorData}`
            : `${calculatorData}.`;
        setCalculatorData(formattedValue);
      }
    }
  };

  const handleInput = (value) => {
    const number = numbers.find((num) => num === value);
    const operator = operators.find((op) => op === value);

    switch (value) {
      case "=":
        handleSubmit();
        break;
      case "AC":
        handleClear();
        break;
      case number:
        handleNumbers(value);
        break;
      case ".":
        dotOperator(value);
        break;
      case operator:
        handleOperators(value);
        break;
      default:
        break;
    }
  };

  const handleOutput = () => {
    setOutput(calculatorData);
  };

  useEffect(() => {
    handleOutput();
  }, [calculatorData]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[320px] bg-black text-white p-1 border-slate-700 border-2">
        <Display input={input} output={output} />
        <Keyboard handleInput={handleInput} />
      </div>
    </div>
  );
}

export default App;
