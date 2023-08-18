import React from 'react';

export const Controls = ({
  isChecked,
  inputValue,
  reset,
  setInputValue,
  setIsChecked
}) => {
  function sort (e) {
    setIsChecked(e.target.checked);
  }

  function filter (e) {
    setInputValue(e.target.value);
  }

  return (
    <form>
      <input type="checkbox" checked={isChecked} onChange={sort} />
      <input type="text" value={inputValue} onChange={filter} />
      <input type="button" value="Reset" onClick={reset} />
    </form>
  );
};
