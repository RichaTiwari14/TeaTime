
import React, { useState } from 'react';
import CashOnDelivery from './Cashondelivery';
import CreditDebitCard from './creditdebitcard';
import NetBanking from './netbanking';
import PayPal from './paypal';
import { useNavigate } from 'react-router-dom';


function PaymentForm() {
   
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [error, setError] = useState('');
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleFirstNameChange = (e) => setFirstName(e.target.value);

    const isValidEmail = (email) =>
        /\S+@\S+\.\S+/.test(email);

    const handleProceedPayment = () => {
        if (!isValidEmail(email) || firstName === '') {
            setError('Please complete all fields correctly.');
            return;
        }
        setError('');
        // Add payment processing logic here
        console.log("Payment processed for:", { email, firstName, selectedPaymentMethod });
        alert("Payment proceeded with selected method: " + selectedPaymentMethod);
    };

    const handleGoBack = () => {
        // Navigate back to the previous page
        navigate(-1);
    };

    const handlePaymentMethodSelect = (method) => {
        setSelectedPaymentMethod(method);
        setError(''); 
    };

    return (
        <div className="payment-form-container">
            <h2>Select Payment Method</h2>
            <div className="payment-methods">
                {['Credit/Debit Card', 'Net Banking', 'PayPal', 'Cash On Delivery'].map((method) => (
                    <button
                        key={method}
                        className={selectedPaymentMethod === method ? 'selected' : ''}
                        onClick={() => handlePaymentMethodSelect(method)}
                    >
                        {method}
                    </button>
                ))}
            </div>

            <h2>Personal Information</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email"  value={email}
                    onChange={handleEmailChange} required />
                                    {!isValidEmail(email) && email && <p className="error">Invalid email format</p>}


                <label>First Name</label>
                <input type="text" placeholder="Enter your first name"  value={firstName}
                    onChange={handleFirstNameChange} required />
                                    {firstName === '' && <p className="error">First name is required</p>}
                </form>
                {error && <p className="error">{error}</p>}
                <form onSubmit={(e) => e.preventDefault()}>


                {/* Conditionally render payment-specific form fields below */}
                {selectedPaymentMethod === 'Credit/Debit Card' && (
                    <CreditDebitCard/>
                )}

                {selectedPaymentMethod === 'Net Banking' && (
                    <div>
                       <NetBanking/>
                    </div>
                )}

                {selectedPaymentMethod === 'PayPal' && (
                    <div>
                       <PayPal/>
                    </div>
                )}

                {selectedPaymentMethod === 'Cash On Delivery' && (
                    <div>
                        <CashOnDelivery/>
                    </div>
                )}
            </form>
            <div className="form-buttons">
                <button onClick={handleGoBack} className="back-button">Go Back</button>
                <button onClick={handleProceedPayment} className="proceed-button">Proceed Payment</button>
            </div>
        </div>
    );
}

export default PaymentForm;
