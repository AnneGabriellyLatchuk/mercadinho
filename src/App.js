import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import './assets/elysium.css';
import CartIcon from './carticon';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <h1>Carrinho de Compras</h1>
      <CartIcon toggleCart={toggleCart} />
      <ProductList addToCart={addToCart} />
      {isCartOpen && (
        <div className="cart-overlay" onClick={toggleCart}>
          <div className="cart-content" onClick={(e) => e.stopPropagation()}>
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
            <button onClick={toggleCart}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;