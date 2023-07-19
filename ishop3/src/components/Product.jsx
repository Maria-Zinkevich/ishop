import React from 'react'
import PropTypes from 'prop-types';

export const Product = ({product, editableProduct, setDeletedProduct, setSelectedProductSkuToShow, selectedProductSkuToShow, setEditProduct, setShowProduct, setEditableProduct}) => {

  Product.propTypes = {
    product: PropTypes.object.isRequired,
  }

  const handleProductClick = () => {
    setSelectedProductSkuToShow(product.sku);
    setEditableProduct(null);
  };

  const handleDeleteClick = (e) => {  
    e.preventDefault();
    e.stopPropagation();
    setDeletedProduct(product.sku);
    setEditProduct(false);
    setShowProduct(false);
  };
  const handleEditClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setEditProduct(true);
    setShowProduct(false);
    setEditableProduct(product);
  }

  return (
    <tr sku={product.sku} onClick={handleProductClick} className={selectedProductSkuToShow === product.sku && editableProduct === null ? 'active' : editableProduct !== null && editableProduct.sku === product.sku? 'edit': 'not-active'}>
        <td>{product.title}</td>
        <td>{product.price}</td>
        <td>{product.url}</td>
        <td>{product.stockBalance}</td>
        <td><button onClick={handleEditClick}>Edit</button></td>
        <td><button onClick={handleDeleteClick}>Delete</button></td>
    </tr>
  )
}