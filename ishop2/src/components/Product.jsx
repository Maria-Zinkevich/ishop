import React from 'react'
import PropTypes from 'prop-types';

export const Product = ({product, setDeletedProduct, setSelectedProduct, selectedProduct }) => {

  Product.propTypes = {
    product: PropTypes.object.isRequired,
  }

  function handleProductClick () {
    setSelectedProduct(product.sku);
  };

  function handleDeleteClick() {
    setDeletedProduct(product.sku);
  }

  return (
    <tr sku={product.sku} onClick={handleProductClick} className={selectedProduct === product.sku ? 'active' : 'not-active'}>
        <td>{product.title}</td>
        <td>{product.price}</td>
        <td><a href={product.link}><img src={product.url} alt='img' width={100} height={100} /></a></td>
        <td>{product.stockBalance}</td>
        <td><button onClick={handleDeleteClick}>Delete</button></td>
    </tr>
  )
}