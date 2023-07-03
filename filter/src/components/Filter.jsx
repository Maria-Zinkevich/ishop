import React from 'react'
import PropTypes from 'prop-types';
import { useState } from "react";

export const Filter = ({ arrayToFilter }) => {

  Filter.propTypes = {
    arrayToFilter: PropTypes.arrayOf(PropTypes.string),
  }

  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [processedArray, setProcessedArray] = useState(arrayToFilter);

  function sort () {
    setIsChecked(!isChecked);
    if (!isChecked) {
      setProcessedArray([...processedArray].sort());
    } else {
      let filteredArray = arrayToFilter.filter(element => processedArray.includes(element));
      setProcessedArray(filteredArray);
    }
  }

  function filter (event) {
    setInputValue(event.target.value);
    if (event.target.value.trim() === "") {
      !isChecked ? setProcessedArray(arrayToFilter) : setProcessedArray([...arrayToFilter].sort());
    } else {
      let filteredArray = arrayToFilter.filter((item) =>{
        return item.toLowerCase().includes(event.target.value.toLowerCase());
      });
      !isChecked ? setProcessedArray(filteredArray) : setProcessedArray([...filteredArray].sort());
    }
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
