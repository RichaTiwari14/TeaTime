import React from 'react';

const ProductDetails = ({ product }) => {
    if (!product) return <div>Loading...</div>;

    return (
        <div className="product-details">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
};

export default ProductDetails;
