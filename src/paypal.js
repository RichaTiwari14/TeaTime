// src/pages/PayPal.js
import React from 'react';

function PayPal() {
    return (
        <div>
            
            <form>
            <h2>PayPal Payment</h2>
                        <label>PayPal Email</label>
                        <input type="email" placeholder="Enter your PayPal email" required />
                        </form>
        </div>
    );
}

export default PayPal;
