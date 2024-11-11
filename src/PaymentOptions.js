// src/components/PaymentOptions.js
import React, { useState } from 'react';

const PaymentOptions = ({ onNext, onBack }) => {
    const [payment, setPayment] = useState('credit');

    const handleNext = () => {
        onNext({ payment });
    };

    return (
        <div className="payment-options">
            <h2>Select Payment Option</h2>
            <div className='payment-options-given'>
                <label className='pay-option-input'>
                    <input 
                        type="radio"
                        value="credit"
                        checked={payment === 'credit'}
                        onChange={(e) => setPayment(e.target.value)}
                    />
                    Credit Card
                </label>
                <label className='pay-option-input'>
                    <input
                        type="radio"
                        value="debit"
                        checked={payment === 'debit'}
                        onChange={(e) => setPayment(e.target.value)}
                    />
                    Debit Card
                </label>
                <label className='pay-option-input'>
                    <input
                        type="radio"
                        value="cod"
                        checked={payment === 'cod'}
                        onChange={(e) => setPayment(e.target.value)}
                    />
                    Cash on Delivery
                </label>
            </div>
            <div className='payment-options-button'>
            <button className='payment-backbutton' onClick={onBack}>Back</button>
            <button className='place-order-button' onClick={handleNext} >Place Order</button>
            </div>
        </div>
    );
};

export default PaymentOptions;
