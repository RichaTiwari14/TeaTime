// src/components/Confirmation.js
import React from 'react';

const Confirmation = ({ orderDetails }) => {
    return (
        <div onLoad={alert('Thank You for purchasing. Your order has been Confirmed')} className="confirmation">
            <h2>Order Confirmed!</h2>
            <p>Thank you for your purchase of {orderDetails.product.name}.</p>
            <p>Shipping Method: {orderDetails.shipping}</p>
            <p>Payment Method: {orderDetails.payment}</p>
            <p>Total Amount: ₹{orderDetails.product.price * orderDetails.product.quantity}</p>
        </div>
    );
};

export default Confirmation;
