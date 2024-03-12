import React, { useState, useEffect } from 'react';
import ProductsList from './ProductsList';
import ProductForm from './ProductForm';

const ProductsManagement = () => {
  // Mock data array

  const initialProducts = JSON.parse(localStorage.getItem('products')) || [
  { id: 1, name: 'Redmi 5a', category: 'Mobile', price: 15000, stockQuantity: 105 },
  { id: 2, name: 'Amazon Echo Dot', category: 'Speaker', price: 4000, stockQuantity: 91 },
  { id: 3, name: 'Ambrone 60w Fast Charger', category: 'Accessories', price: 1500, stockQuantity: 37 },
  { id: 4, name: 'Samsung Galaxy S20', category: 'Mobile', price: 50000, stockQuantity: 80 },
  { id: 5, name: 'Sony XB450 Headphones', category: 'Headphones', price: 3000, stockQuantity: 63 },
  { id: 6, name: 'Logitech Wireless Mouse', category: 'Accessories', price: 1200, stockQuantity: 45 },
  { id: 7, name: 'HP Pavilion Laptop', category: 'Laptop', price: 60000, stockQuantity: 28 },
  { id: 8, name: 'Canon EOS Rebel T7i', category: 'Camera', price: 70000, stockQuantity: 15 },
  { id: 9, name: 'Fitbit Charge 4', category: 'Fitness Tracker', price: 8000, stockQuantity: 50 },
  { id: 10, name: 'Bose SoundLink Mini', category: 'Speaker', price: 8000, stockQuantity: 72 },
  { id: 11, name: 'Dell 24-inch Monitor', category: 'Monitor', price: 15000, stockQuantity: 20 },
  { id: 12, name: 'Anker PowerCore 10000', category: 'Power Bank', price: 2000, stockQuantity: 60 },
  { id: 13, name: 'Apple AirPods Pro', category: 'Earbuds', price: 25000, stockQuantity: 42 }
  ];

  const [products, setProducts] = useState(initialProducts);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, { id: Date.now(), ...newProduct }]);
    console.log(products);
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  return (
    <div>
      <h2>Add Product</h2>
      <ProductForm onSubmit={handleAddProduct} />
      {/* Add space */}
      <div style={{ marginTop: '2rem' }}></div>
      {/* Pass mock data as a prop */}
      <ProductsList products={products} onDelete={handleDeleteProduct} />
    </div>
  );
};

export default ProductsManagement;
