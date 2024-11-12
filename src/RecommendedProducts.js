// src/components/RecommendedProducts.js
import React from 'react';

const RecommendedProducts = () => {
    const recommendations = [
        { id: 1, name: "Whole Wheat Cookies", image: "https://img.freepik.com/free-photo/close-up-chocolate-cookies_23-2148628343.jpg?ga=GA1.1.974320245.1728532047&semt=ais_hybrid", price: 150 },
        { id: 2, name: "Khakhri", image: "https://img.freepik.com/premium-photo/salted-soya-sticks-indian-namkeen-food_466689-80997.jpg?ga=GA1.1.974320245.1728532047&semt=ais_hybrid", price: 180 },
    ];

    return (
        <div className="recommended-products">
            <h3>Goes great with</h3>
            <div className="recommendation-list">
                {recommendations.map((product) => (
                    <div key={product.id} className="recommendation-item">
                        <img src={product.image} alt={product.name} />
                        <p>{product.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecommendedProducts;
