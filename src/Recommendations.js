import React, { useEffect, useState } from 'react';

const fetchRecommendationsFromAPI = async () => [
    { id: 2, name: 'Recommended Product 1', price: 19.99 },
    { id: 3, name: 'Recommended Product 2', price: 24.99 }
  ];
  
const Recommendations = () => {
    const [recommendedProducts, setRecommendedProducts] = useState([]);

    useEffect(() => {
        const fetchRecommendations = async () => {
            const recommendations = await fetchRecommendationsFromAPI(); // Mocked function
            setRecommendedProducts(recommendations);
        };
        fetchRecommendations();
    }, []);

    return (
        <div className="recommendations">
            <h3>Recommended for You</h3>
            {recommendedProducts.map((product) => (
                <div key={product.id} className="recommended-product">
                    <p>{product.name} - ${product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default Recommendations;
