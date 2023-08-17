import React from 'react';

export const Controls = ({
  isChecked,
  inputValue,
  sort,
  filter,
  reset,
}) => {
  return (
    <form>
      <input type="checkbox" checked={isChecked} onChange={sort} />
      <input type="text" value={inputValue} onChange={filter}/>
      <input type="button" value="Reset" onClick={reset} />
    </form>
  );
};
