// ProductsList.js

import React, { useState } from 'react';
import ProductEditForm from './ProductEditForm';

const ProductsList = ({ products, onDelete }) => {
  const [editingProduct, setEditingProduct] = useState(null);

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
  };

  const handleUpdate = (updatedProduct) => {
    // Update the product logic here
    console.log("Updated product:", updatedProduct);
    // Reset editingProduct after update
    setEditingProduct(null);
  };

  return (
    <div>
      <h2>Products</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.stockQuantity}</td>
              <td>
                <div>
                  <span 
                    className="material-symbols-outlined" 
                    style={{ marginRight: '10px', cursor: 'pointer' }} 
                    onClick={() => handleEdit(product)}
                  >
                    edit
                  </span>
                  <span 
                    className="material-symbols-outlined" 
                    style={{ cursor: 'pointer' }} 
                    onClick={() => onDelete(product.id)}
                  >
                    delete
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editingProduct && (
        <ProductEditForm 
          product={editingProduct} 
          onUpdate={handleUpdate} 
          onCancel={handleCancelEdit} 
        />
      )}
    </div>
  );
};

export default ProductsList;
