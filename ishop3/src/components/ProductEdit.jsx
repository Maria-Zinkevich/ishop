import React from 'react'
import { useState } from "react";
export const ProductEdit = ({product,setSave}) => {
  const [sku, setSku] = useState(product.sku);
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [url, setUrl] = useState(product.url);

  const handleSave = (e) => {
    setSave({sku,title,price,url})
  };
  const handleCancel = (e) => {
    setTitle(product.title)
    setPrice(product.price)
    setUrl(product.url)
  };
  return (
        <div>
            <span>{product.sku}</span>
            {/* <input type="text" value={sku} onChange={(e) => setSku(e.target.value)} /> */}
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
  )
}