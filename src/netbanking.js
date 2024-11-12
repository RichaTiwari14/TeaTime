// src/pages/NetBanking.js
import React from 'react';

function NetBanking() {
    return (
        <div>
            <form>
            <h2>Net Banking Payment</h2>
                        <label>Bank Name</label>
                        <input type="text" placeholder="Enter your bank name" required />
                        <label>Account Number</label>
                        <input type="text" placeholder="Enter account number" required />
            </form>
                    </div>
    );
}

export default NetBanking;
