import React from 'react';
import { Link } from 'react-router-dom';

export const categories = [
    {
        id: 1,
        category: 'Tea',
        title: ' TEA',
        subtitle: 'Tea',
        imageUrl: 'https://cdn.pixabay.com/photo/2023/05/27/07/17/masala-tea-8020912_640.jpg',
    },
    
    {
        id: 4,
        category: 'Milk',
        title: 'MILK',
        subtitle: 'Milk',
        imageUrl: 'https://cdn.pixabay.com/photo/2017/08/08/08/55/food-2610745_640.jpg',
    },
    {
        id: 5,
        category: 'Coffee',
        title: 'COFFEE',
        subtitle: 'Coffee',
        imageUrl: 'https://cdn.pixabay.com/photo/2022/11/01/05/18/coffee-7561288_640.jpg',
    },
    {
        id: 6,
        category: 'Snacks',
        title: 'SNACKS',
        subtitle: 'Chai Time Snacks',
        imageUrl: 'https://cdn.pixabay.com/photo/2021/04/22/01/38/biscuits-6197806_640.jpg',
    },
];

function Product() {
    return (
        <div className='product'>
            <div className='product_title'>
                <p>Tea has the impulse you need to drive.</p>
                <h1>Our Products</h1>
            </div>
            <div className="category-container">
                {categories.map((category) => (
                    <div key={category.id} className="category-card">
                        <Link to={`/productlist/category/${category.category}`}>
                            <img src={category.imageUrl} alt={category.title} className="category-image" />
                        </Link>
                        <div className="category-title">{category.title}</div>
                        <div className="category-subtitle">{category.subtitle}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product;
