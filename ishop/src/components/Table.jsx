import React from 'react'
import PropTypes from 'prop-types';
import { Item } from './Item';

export const Table = ({ shopname, products }) => {

  Table.propTypes = {
    shopname: PropTypes.string.isRequired,
    itemsCart: PropTypes.array.isRequired
  }

  return (
    <div className=''>
      <h2>{shopname}</h2>
      <table>
            <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Photo</th>
                <th>Stock balance</th>
            </tr>
            {products.map((product) => {
                return (
                    <Item product={product} />
                )
            })}
        </table>
    </div>
  )
}