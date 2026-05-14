import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // TODO: Implement state for dark mode toggle
const [darkMode, setDarkMode] = useState(false);
  // TODO: Implement state for cart management
const [cart, setCart] = useState([]);
  // TODO: Implement state for category filtering
const [selectedCategory, setSelectedCategory] = useState('all');
  // product data
const products = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
];

const toggleDarkMode = () => {
  setDarkMode(!darkMode);
};

const addToCart = (product) => {
  setCart([...cart, product]);
};

const filterProducts = (category) => {
  setSelectedCategory(category);
};

  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select onChange={(e) => filterProducts(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList products={products} selectedCategory={selectedCategory} />

      {/* TODO: Implement and render Cart component */}
      <Cart items={cart} />
    </div>
  )
}

export default App
