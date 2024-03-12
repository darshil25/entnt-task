// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import ProductsManagement from './Components/ProductsManagement';
import OrdersManagement from './Components/OrdersManagement';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <NavLink to="/" activeClassName="active" exact>
            <div className='icon-section'>
              <span className="material-symbols-outlined">team_dashboard</span>
              <p className='icon-text'>Dashboard</p>
            </div>
          </NavLink>
          <NavLink to="/products" activeClassName="active">
            <div className='icon-section'>
              <span className="material-symbols-outlined">inventory_2</span>
              <p className='icon-text'>Products</p>
            </div>
          </NavLink>
          <NavLink to="/orders" activeClassName="active">
            <div className='icon-section'>
              <span className="material-symbols-outlined">order_approve</span>
              <p className='icon-text'>Orders</p>
            </div>
          </NavLink>
        </nav>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<ProductsManagement />} />
            <Route path="/orders" element={<OrdersManagement />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
