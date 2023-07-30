
import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Recuperar dados do localStorage
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

    setCartItems(savedCartItems);
    updateCartTotal();
  }, []);

  const updateCartTotal = () => {
    const total = cartItems.reduce((acc, item) => acc + item.valor * item.quantidade, 0);
    return total.toFixed(2);
  };

  return (
    <div>
      <h2>Carrinho de Compra</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <strong>{item.nome}</strong>
            <p>Quantidade: {item.quantidade}</p>
            <p>Valor Unitário: R$ {item.valor.toFixed(2)}</p>
            <p>Subtotal: R$ {(item.quantidade * item.valor).toFixed(2)}</p>
          </li>
        ))}
      </ul>
      <p>Total da Compra: R$ {cartItems.reduce((total, item) => total + item.valor * item.quantidade, 0).toFixed(2)}</p>
      
   
    </div>
  );
};

export default Cart;
