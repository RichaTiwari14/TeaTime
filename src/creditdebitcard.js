// src/pages/CreditDebitCard.js
import React from 'react';

function CreditDebitCard() {
    return (
        <div>
            <form>
            <h2>Credit/Debit Card Payment</h2>

                <label>Name on Card</label>
                <input type="text" placeholder="Cardholder's name" />

                <label>Card Number</label>
                <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX" />

                <div className="card-details">
                    <div>
                        <label>Expiration</label>
                        <input type="number" placeholder="MM" />
                        <input type="number" placeholder="YYYY" />
                    </div>
                    <div>
                        <label>CVV Number</label>
                        <input type="number" placeholder="CVV" />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CreditDebitCard;
