import React from 'react'
import PropTypes from 'prop-types';
import { Product } from './Product';
import { ProductCardToShow } from './ProductCardToShow';
import { useState ,useEffect} from "react";
import { ProductEdit } from './ProductEdit';

export const Shop = ({ shopname, productsArray }) => {
  Shop.propTypes = {
    shopname: PropTypes.string.isRequired
  }
  const [products, setProducts] = useState(productsArray);
  const [selectedProductSkuToShow, setSelectedProductSkuToShow] = useState(null);
  const [editProduct, setEditProduct] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [editableProduct, setEditableProduct] = useState(null);
  const [save, setSave] = useState(null);

  useEffect(
    () =>{
    if(save !==null) products.forEach((item,index) =>{
        if(item.sku === save.sku) {
          products[index] = save;
        }
      });
      setProducts(products);
    },
    [save,products]
  );

  const handleItemClick = (productSku) => {
    setSelectedProductSkuToShow(productSku);
    setShowProduct(true);
    setEditProduct(false);
  };

  const deleteProduct = (deletedProduct) => {
    const confirmDelete = window.confirm("Are you sure?");
    confirmDelete && setProducts(products.filter((product) => product.sku !== deletedProduct));
  };
  
  const handleItemEdit = (productSku) => {
    setEditableProduct(productSku);
  };

  const getCurrentProduct = (sku) => {
    return products.filter(function(item) {
      return (item.sku === sku);
  });
  };

 
  return (
    <div>
      <h1>{shopname}</h1>
        <table>
          <thead> 
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Photo</th>
            <th>Stock balance</th>
            <th>Control</th>
          </tr>
          </thead>
          <tbody>
            {products.map((product, index) => <Product 
              key={index} 
              product={product} 
              setSelectedProductSkuToShow={handleItemClick}
              setDeletedProduct={deleteProduct}  
              selectedProductSkuToShow={selectedProductSkuToShow}
              setEditProduct={setEditProduct}
              setShowProduct={setShowProduct}
              setEditableProduct={handleItemEdit}
              editableProduct={editableProduct}
            />)}
          
          </tbody>
        </table>
        {!!showProduct && <ProductCardToShow selectedProductSkuToShow={selectedProductSkuToShow} chosenProduct={getCurrentProduct(selectedProductSkuToShow)[0]} />}
        {!!editProduct && <ProductEdit key={editableProduct.sku} setSave={setSave} product={getCurrentProduct(editableProduct.sku)[0]} /> }
    </div>
  )
}