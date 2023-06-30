import React from 'react'
import PropTypes from 'prop-types';
import { useState } from "react";

export const Filter = ({ arrayToFilter }) => {
  Filter.propTypes = {
    arrayToFilter: PropTypes.arrayOf(PropTypes.string),
  }

  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [sortedArray, setSortedArray] = useState(arrayToFilter);

  function checkbox () {
    setIsChecked(!isChecked);
    if (!isChecked) {
      let arr = arrayToFilter.slice()
      setSortedArray(arr.sort());
    } else {
      setSortedArray(arrayToFilter);
    }
  }

  function reset() {
    setInputValue("");
    setIsChecked(false);
    setSortedArray(arrayToFilter);
  }

  function change (event) {
    setInputValue(event.target.value);
    if (event.target.value.trim() === "") {
      setSortedArray(arrayToFilter);
    } else {
      let sortedArrayFromInput = arrayToFilter.filter((item) =>{
        return item.toLowerCase().includes(event.target.value.toLowerCase());
      });
      setSortedArray(sortedArrayFromInput);
    }
  }

  return (
    <>
      <form>
        <input type="checkbox" value={inputValue} onClick={checkbox} />
        <input type="text" onChange={change}/>
        <input type="button" value="Reset" onClick={reset} />
      </form>
      <div id="scroll-wrap">
        <ul>
          {sortedArray.map((word, index)=> {
            return <li key={index} >{word}</li>
          })}
        </ul>
      </div>
    </>
  )
}
// import React, { useState } from 'react';

// export const Filter = ({ arrayToFilter }) => {
//   const [searchText, setSearchText] = useState('');
//   const [sortAlphabetically, setSortAlphabetically] = useState(false);
//   const [filteredWords, setFilteredWords] = useState(arrayToFilter);

//   const handleInputChange = (event) => {
//     const text = event.target.value;
//     setSearchText(text);

//     if (text.trim() === '') {
//       setFilteredWords(arrayToFilter);
//     } else {
//       const filtered = arrayToFilter.filter((word) =>
//         word.toLowerCase().includes(text.toLowerCase())
//       );
//       setFilteredWords(filtered);
//     }
//   };

//   const handleCheckboxChange = () => {
//     setSortAlphabetically(!sortAlphabetically);
//     if (!sortAlphabetically) {
//       setFilteredWords([...filteredWords].sort());
//     } else {
//       setFilteredWords(arrayToFilter);
//     }
//   };

//   const handleResetClick = () => {
//     setSearchText('');
//     setSortAlphabetically(false);
//     setFilteredWords(arrayToFilter);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={searchText}
//         onChange={handleInputChange}
//         placeholder="Search..."
//       />
//       <label>
//         <input
//           type="checkbox"
//           checked={sortAlphabetically}
//           onChange={handleCheckboxChange}
//         />
//         Sort Alphabetically
//       </label>
//       <button onClick={handleResetClick}>Reset</button>

//       <ul>
//         {filteredWords.map((word) => (
//           <li key={word}>{word}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };