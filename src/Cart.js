import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h2>Carrinho</h2>
      <ul>
        {cartItems.length === 0 ? (
          <li>O carrinho está vazio.</li>
        ) : (
          cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <strong>{item.name}</strong> - R$ {item.price.toFixed(2)}
              <button onClick={() => removeFromCart(item.id)}>Remover</button>
            </li>
          ))
        )}
      </ul>
      <h3>
        Total: R$ {cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
      </h3>
    </div>
  );
};

export default Cart;