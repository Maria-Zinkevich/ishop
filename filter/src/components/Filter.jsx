import React from 'react'
import PropTypes from 'prop-types';
import { useState, useEffect } from "react";

export const Filter = ({ arrayToFilter }) => {

  Filter.propTypes = {
    arrayToFilter: PropTypes.arrayOf(PropTypes.string),
  }

  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [processedArray, setProcessedArray] = useState(arrayToFilter);

  useEffect(
    () =>{
      let currentValue = [...arrayToFilter];
      if (inputValue !== "") currentValue = currentValue.filter(item => item.includes(inputValue) === true);
      if (isChecked) currentValue.sort();
      setProcessedArray(currentValue);
    },
    [isChecked, inputValue]
  );

  function sort (e) {
    setIsChecked(e.target.checked);
  }

  function filter (e) {
    setInputValue(e.target.value);
  }

  function reset() {
    setInputValue("");
    setIsChecked(false);
    setProcessedArray(arrayToFilter);
  }

  return (
    <>
      <form>
        <input type="checkbox" checked={isChecked} onChange={sort} />
        <input type="text" value={inputValue} onChange={filter}/>
        <input type="button" value="Reset" onClick={reset} />
      </form>
      <div id="scroll-wrap">
        <ul>
          {processedArray.map((word, index)=> {
            return <li key={index} >{word}</li>
          })}
        </ul>
      </div>
    </>
  )
}
