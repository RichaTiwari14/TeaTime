import React from 'react';

const ShoppingCart = ({ cartItems }) => {
    const calculateTotal = () => 
        cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="shopping-cart">
            <h3>Your Cart</h3>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.name} - ${item.price} x {item.quantity}
                        </li>
                    ))}
                </ul>
            )}
            <p>Total: ${calculateTotal().toFixed(2)}</p>
        </div>
    );
};

export default ShoppingCart;
