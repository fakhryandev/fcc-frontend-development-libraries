function App() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[320px] bg-black text-white p-1 border-slate-700 border-2">
        <div className="text-sm text-right text-yellow-400 h-5"></div>
        <div className="text-right text-3xl h-10"></div>
        <div className="grid grid-cols-4 text-lg">
          <button className="col-span-2 bg-red-900 py-3 border border-black hover:border-gray-600">
            AC
          </button>
          <button className="bg-zinc-500 border border-black hover:border-gray-600">
            /
          </button>
          <button className="bg-zinc-500 border border-black hover:border-gray-600">
            x
          </button>
          <button className="bg-gray-700 py-3 border border-black hover:border-gray-600">
            7
          </button>
          <button className="bg-gray-700 border border-black hover:border-gray-600">
            8
          </button>
          <button className="bg-gray-700 border border-black hover:border-gray-600">
            9
          </button>
          <button className="bg-zinc-500 border border-black hover:border-gray-600">
            -
          </button>
          <button className="bg-gray-700 py-3 border border-black hover:border-gray-600">
            4
          </button>
          <button className="bg-gray-700 border border-black hover:border-gray-600">
            5
          </button>
          <button className="bg-gray-700 border border-black hover:border-gray-600">
            6
          </button>
          <button className="bg-zinc-500 border border-black hover:border-gray-600">
            +
          </button>
          <button className="bg-gray-700 py-3 border border-black hover:border-gray-600">
            3
          </button>
          <button className="bg-gray-700 border border-black hover:border-gray-600">
            2
          </button>
          <button className="bg-gray-700 border border-black hover:border-gray-600">
            1
          </button>
          <button className="row-span-3 bg-cyan-800 border border-black hover:border-gray-600">
            =
          </button>
          <button className="col-span-2 bg-gray-700 py-3 border border-black hover:border-gray-600">
            0
          </button>
          <button className="bg-gray-700 border border-black hover:border-gray-600">
            .
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
