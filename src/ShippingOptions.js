// src/components/ShippingOptions.js
import React, { useState } from 'react';

const ShippingOptions = ({ onNext, onBack }) => {
    const [shipping, setShipping] = useState('standard');

    const handleNext = () => {
        onNext({ shipping });
    };

    return (
        <div className="shipping-options">
            <h2>Select Shipping Option</h2>
            <div className='shippingOptionsdiv'>
                <div>
                <label>
                    <input
                        type="radio"
                        value="standard"
                        checked={shipping === 'standard'}
                        onChange={(e) => setShipping(e.target.value)}
                    />
                    Standard Shipping (Free)
                </label>
                </div>
                <div>
                <label>
                    <input
                        type="radio"
                        value="express"
                        checked={shipping === 'express'}
                        onChange={(e) => setShipping(e.target.value)}
                    />
                    Express Shipping (₹50)
                </label>
                </div>
            </div>
            <div className='shippingButtons'>
            <button className='backbutton' onClick={onBack}>Back</button>
            <button className='proceedbutton' onClick={handleNext}>Proceed to Payment</button>
            </div>
        </div>
    );
};

export default ShippingOptions;
