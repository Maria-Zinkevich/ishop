import React from 'react'
import PropTypes from 'prop-types';

export const Item = ({ product }) => {

  Item.propTypes = {
    product: PropTypes.object.isRequired
  }

  return (
    <tr key={product.sku}>
        <td>{product.title}</td>
        <td>{product.price}</td>
        <td><a href={product.link}><img src={product.url} alt='img' width={100} height={100} /></a></td>
        <td>{product.stockBalance}</td>
    </tr>
  )
}