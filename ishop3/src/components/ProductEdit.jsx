import React from 'react'
import { useState } from "react";
export const ProductEdit = ({product}) => {
  const [sku, setSku] = useState(product.sku);
  const [name, setName] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [url, setUrl] = useState(product.url);

  const handleSave = (e) => {
    console.log(name);
  };
  const handleCancel = (e) => {
    console.log(name);
  };
    return (
        <div>
            <input type="text" value={sku} onChange={(e) => setSku(e.target.value)} />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>

  )
}