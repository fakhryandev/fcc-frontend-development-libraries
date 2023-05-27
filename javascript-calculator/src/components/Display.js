const Display = ({ input, output }) => (
  <>
    <div className="text-sm text-right text-yellow-400 h-5">{output}</div>
    <div id="display" className="text-right text-3xl h-10">
      {input}
    </div>
  </>
);

export default Display;
