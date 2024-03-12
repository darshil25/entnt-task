import React, { useState } from 'react';

const ProductForm = ({ onSubmit, initialProduct }) => {
  const [product, setProduct] = useState(initialProduct || { name: '', category: '', price: '', stockQuantity: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);
    setProduct({ name: '', category: '', price: '', stockQuantity: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='product-form'>
        <input type="text" name="name" placeholder="Name" value={product.name} onChange={handleChange} required />
        <input type="text" name="category" placeholder="Category" value={product.category} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} required />
        <input type="number" name="stockQuantity" placeholder="Stock Quantity" value={product.stockQuantity} onChange={handleChange} required />
        <button type="submit">{initialProduct ? 'Update Product' : 'Add Product'}</button>
      </div>
    </form>
  );
};

export default ProductForm;
