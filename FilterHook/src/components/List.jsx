import React from 'react';

export const List = ({ processedArray }) => {
  return <ul>{processedArray.map((word, index) => {
    return <li key={index}>{word}</li>;
  })}</ul>
};
