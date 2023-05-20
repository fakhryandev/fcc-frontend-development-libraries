import Display from "./components/Display";
import Keyboard from "./components/Keyboard";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[320px] bg-black text-white p-1 border-slate-700 border-2">
        <Display />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
