import React from 'react';

const QuantitySelector = ({ quantity, setQuantity }) => {
    const handleChange = (e) => {
        setQuantity(Number(e.target.value));
    };

    return (
        <div className="quantity-selector">
            <label htmlFor="quantity">Quantity:</label>
            <select id="quantity" value={quantity} onChange={handleChange}>
                {[...Array(10).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                        {num + 1}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default QuantitySelector;
