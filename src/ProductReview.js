// src/components/ProductReview.js
import React, { useState } from 'react';

const ProductReview = ({ product, onNext }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (change) => {
      setQuantity((prev) => Math.max(1, prev + change));
    };

    const handleNext = () => {
        onNext({ product: { ...product, quantity } });
    };

    return (
        <div className="product-review">
            <h2>Review Your Product</h2>
            <div className="product-info">
                <p>{product.title}</p>
                <p>Size: {product.size}</p>
                <div className="quantity-selector">
                    <button onClick={() => handleQuantityChange( - 1)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => handleQuantityChange( + 1)}>+</button>
                </div>
                <p>Price: ₹{product.price * quantity}</p>
            </div>
            <button className="next-button" onClick={handleNext}>Proceed to Shipping</button>
            <img className='buynow-image' src={product.image} alt='masala tea'></img>

        </div>
    );
};

export default ProductReview;
