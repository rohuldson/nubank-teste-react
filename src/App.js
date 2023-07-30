// App.js
import React from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

function App() {
  return (
    <div>
      <header className="header">
        <div className="logo">Meu Logo</div>
        <div className="search">
          <input type="text" placeholder="Buscar produtos..." />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="cart-icon">
          <i className="fas fa-shopping-cart"></i>
          <span className="item-count">0</span>
        </div>
      </header>
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
