import Key from "./Key";

const keyboarData = [
  {
    id: "clear",
    value: "AC",
    styling:
      "col-span-2 bg-red-900 py-3 border border-black hover:border-gray-600",
  },
  {
    id: "divide",
    value: "/",
    styling: "bg-zinc-500 border border-black hover:border-gray-600",
  },
  {
    id: "multiply",
    value: "x",
    styling: "bg-zinc-500 border border-black hover:border-gray-600",
  },
  {
    id: "seven",
    value: 7,
    styling: "bg-gray-700 py-3 border border-black hover:border-gray-600",
  },
  {
    id: "eight",
    value: 8,
    styling: "bg-gray-700 py-3 border border-black hover:border-gray-600",
  },
  {
    id: "nine",
    value: 9,
    styling: "bg-gray-700 py-3 border border-black hover:border-gray-600",
  },
  {
    id: "subtract",
    value: "-",
    styling: "bg-zinc-500 py-3 border border-black hover:border-gray-600",
  },
  {
    id: "four",
    value: 4,
    styling: "bg-gray-700 py-3 border border-black hover:border-gray-600",
  },
  {
    id: "five",
    value: 5,
    styling: "bg-gray-700 py-3 border border-black hover:border-gray-600",
  },
  {
    id: "six",
    value: 6,
    styling: "bg-gray-700 py-3 border border-black hover:border-gray-600",
  },
  {
    id: "add",
    value: "+",
    styling: "bg-zinc-500 py-3 border border-black hover:border-gray-600",
  },
  {
    id: "three",
    value: 3,
    styling: "bg-gray-700 py-3 border border-black hover:border-gray-600",
  },
  {
    id: "two",
    value: 2,
    styling: "bg-gray-700 py-3 border border-black hover:border-gray-600",
  },
  {
    id: "one",
    value: 1,
    styling: "bg-gray-700 py-3 border border-black hover:border-gray-600",
  },
  {
    id: "equals",
    value: "=",
    styling: "row-span-3 bg-cyan-800 border border-black hover:border-gray-600",
  },
  {
    id: "zero",
    value: 0,
    styling:
      "col-span-2 bg-gray-700 py-3 border border-black hover:border-gray-600",
  },
  {
    id: "decimal",
    value: ".",
    styling: "bg-gray-700 border border-black hover:border-gray-600",
  },
];

const Keyboard = (props) => (
  <div className="grid grid-cols-4 text-lg">
    {keyboarData.map((key) => (
      <Key key={key.id} keyData={key} handleInput={props.handleInput} />
    ))}
  </div>
);
export default Keyboard;
