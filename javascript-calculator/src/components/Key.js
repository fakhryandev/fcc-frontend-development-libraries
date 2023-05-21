const Key = ({ keyData: { id, value, styling }, handleInput }) => (
  <button id={id} className={styling} onClick={() => handleInput(value)}>
    {value}
  </button>
);

export default Key;
