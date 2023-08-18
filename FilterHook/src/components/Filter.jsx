import React from 'react'
import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import { List } from './List';
import { Controls } from './Controls';
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

  function sort (isChecked) {
    setIsChecked(isChecked);
  }

  function filter (inputValue) {
    setInputValue(inputValue);
  }

  function reset() {
    sort(false); 
    filter("");
  }

  return (
    <>
      <Controls
        isChecked={isChecked}
        inputValue={inputValue}
        setInputValue={setInputValue}
        setIsChecked={setIsChecked}
        reset={reset}
      />
      <List processedArray={processedArray} />
    </>
  )
}
