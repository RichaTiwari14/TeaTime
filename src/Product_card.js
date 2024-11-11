import React from 'react';

const Product_Card = ({ id, image, title, description, price, originalPrice, discount,category }) => {
  return (
    
    <div className="product-card" >
        <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
        <div className="product-pricing">
          <span className="product-price">₹{price}</span>
          {originalPrice && (
            <span className="product-original-price">₹{originalPrice}</span>
          )}
          {discount && (
            <span className="product-discount">Save {discount}%</span>
          )}
        </div>
      </div>
    </div>
    
  );
};

export default Product_Card;
