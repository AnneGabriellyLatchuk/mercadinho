import React from 'react';
import cartIcon from './assets/icones/carrinho.svg'; 

const CartIcon = ({ toggleCart }) => {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <img src={cartIcon} alt="Carrinho" />
    </div>
  );
};

export default CartIcon;