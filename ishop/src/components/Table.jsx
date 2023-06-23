import React from 'react'
import PropTypes from 'prop-types';
import { TableRow } from './TableRow';
import { TableHeader } from './TableHeader';

export const Table = ({ shopname, products }) => {

  Table.propTypes = {
    shopname: PropTypes.string.isRequired,
    products: PropTypes.array.isRequired,
  }

  return (
    <div>
      <h1>{shopname}</h1>
        <table>
          <thead> 
            <TableHeader />
          </thead>
          <tbody>
            {products.map((product) => <TableRow product={product} />)}
          </tbody>
        </table>
    </div>
  )
}