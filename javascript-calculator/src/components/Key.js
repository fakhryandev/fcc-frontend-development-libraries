const Key = ({ keyData: { id, value, styling } }) => (
  <button id={id} className={styling}>
    {value}
  </button>
);

export default Key;
