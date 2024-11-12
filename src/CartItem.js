// src/components/CartItem.js
import React, { useState } from 'react';

const CartItem = ({ item }) => {
    const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
                <p className="item-name">{item.title}</p>
                <p className="item-size">Size: {item.size}</p>
                <div className="item-quantity">
                    <button onClick={() => handleQuantityChange(-1)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => handleQuantityChange(+ 1)}>+</button>
                </div>
                <p className="item-price">₹ {item.price * quantity}</p>
            </div>
        </div>
    );
};

export default CartItem;
