import React from 'react';

export const ProductCardToShow = ({chosenProduct}) => {
  return (
    <div style={{"border": "2px solid red"}}>
      <h2>title:{chosenProduct && chosenProduct.title}</h2>
      <p>price:{chosenProduct && chosenProduct.price}</p>
      <p>stock balance:{chosenProduct && chosenProduct.stockBalance}</p>
    </div>
  )
}