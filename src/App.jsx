import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  function handleToggleDarkMode() {
    setDarkMode(!darkMode);
  }

  function handleAddToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1> Shopping App</h1>

      <p>
        Welcome! Your task is to implement filtering, cart management, and dark mode.
      </p>

      {/* FIX 1: Dark mode button MUST exist */}
      <DarkModeToggle
        darkMode={darkMode}
        onToggle={handleToggleDarkMode}
      />

      {/* Category filter */}
      <label>Filter by Category:</label>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* FIX 2: Pass props correctly */}
      <ProductList
        selectedCategory={selectedCategory}
        onAddToCart={handleAddToCart}
      />

      {/* Cart */}
      <Cart cart={cart} />
    </div>
  );
};

export default App
