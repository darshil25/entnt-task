// ProductEditForm.js

import React, { useState } from 'react';

const ProductEditForm = ({ product, onUpdate, onCancel }) => {
  const [editedProduct, setEditedProduct] = useState(product);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onUpdate function with the edited product
    onUpdate(editedProduct);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={editedProduct.name} onChange={handleChange} />
      <input type="text" name="category" value={editedProduct.category} onChange={handleChange} />
      <input type="number" name="price" value={editedProduct.price} onChange={handleChange} />
      <input type="number" name="stockQuantity" value={editedProduct.stockQuantity} onChange={handleChange} />
      <button type="submit">Update</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default ProductEditForm;
