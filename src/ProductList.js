
import React, { useState } from 'react';
import blackProductImage from './images/image1.jpg';
import greyProductImage from './images/image4.jpg';
import lackProductImage from './images/image3.jpg';
import './ProductList.css'; 


const ProductList = () => {
  // Array de objetos com dados dos produtos
  const initialProducts = [
    { id: 1, nome: 'Produto 1', descricao: 'Descrição do Produto 1', valor: 10.0,imagem: blackProductImage },
    { id: 2, nome: 'Produto 2', descricao: 'Descrição do Produto 2', valor: 20.0, imagem: greyProductImage},
    { id: 3, nome: 'Produto 3', descricao: 'Descrição do Produto 3', valor: 15.0,imagem: lackProductImage },
  ];

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      // Se o produto já estiver no carrinho, apenas atualiza a quantidade
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantidade += 1;
      setCartItems(updatedCartItems);
    } else {
      // Caso contrário, adiciona o produto ao carrinho com quantidade 1
      const newCartItem = { ...product, quantidade: 1 };
      setCartItems([...cartItems, newCartItem]);
    }
  };

  const [products] = useState(initialProducts);

  return (
    <div>
      <h2>Produtos Disponíveis:</h2>
      <div className="product-list">
        {initialProducts.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.imagem} alt={product.nome} />
            <strong>{product.nome}</strong>
            <p>{product.descricao}</p>
            <p>Valor: R$ {product.valor.toFixed(2)}</p>
            <button onClick={() => handleAddToCart(product)}>Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
