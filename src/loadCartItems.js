import React, { useState, useEffect } from 'react';
import Cart, { loadCartItems } from './Cart';

const App = () => {
  const [cartItems, setCartItems] = useState(loadCartItems());

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <div>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;