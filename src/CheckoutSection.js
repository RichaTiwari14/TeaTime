// src/components/CheckoutSection.js
import React from 'react';

const CheckoutSection = ({ subtotal }) => {
    return (
        <div className="checkout-section">
            <p className="subtotal">Subtotal: ₹ {subtotal}</p>
            <button className="checkout-button">Check out</button>
            <p className="disclaimer">Shipping, taxes, and discount codes calculated at checkout.</p>
        </div>
    );
};

export default CheckoutSection;
