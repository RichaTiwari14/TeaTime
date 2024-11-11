// News.js
import React, { useState, useEffect } from 'react';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [category, setCategory] = useState('All');

  useEffect(() => {
    // Mock fetch for news articles
    const fetchedArticles = [
      {
        id: 1,
        title: 'The Health Benefits of Green Tea',
        summary: 'Green tea is rich in antioxidants and offers numerous health benefits.',
        category: 'Health Benefits',
        image: 'https://cdn.pixabay.com/photo/2016/09/21/22/00/tea-1685847_640.jpg',
      },
      {
        id: 2,
        title: 'New Product Launch: Organic Matcha',
        summary: 'Try our new organic matcha sourced directly from Japan.',
        category: 'New Products',
        image: 'https://cdn.pixabay.com/photo/2017/05/30/12/21/matcha-2356774_640.jpg',
      },
      {
        id: 3,
        title: 'Exploring Tea Culture Around the World',
        summary: 'Learn about different tea traditions from various countries.',
        category: 'Tea Culture',
        image: 'https://cdn.pixabay.com/photo/2015/02/04/13/23/tea-623796_640.jpg',
      },
    ];
    setArticles(fetchedArticles);
    setFilteredArticles(fetchedArticles);
  }, []);

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
    if (selectedCategory === 'All') {
      setFilteredArticles(articles);
    } else {
      setFilteredArticles(articles.filter(article => article.category === selectedCategory));
    }
  };

  return (
    <div className="news-section">
      <h2>Latest Tea News</h2>
      <div className="category-filter">
        <button onClick={() => handleCategoryChange('All')} className={category === 'All' ? 'active' : ''}>All</button>
        <button onClick={() => handleCategoryChange('Health Benefits')} className={category === 'Health Benefits' ? 'active' : ''}>Health Benefits</button>
        <button onClick={() => handleCategoryChange('New Products')} className={category === 'New Products' ? 'active' : ''}>New Products</button>
        <button onClick={() => handleCategoryChange('Tea Culture')} className={category === 'Tea Culture' ? 'active' : ''}>Tea Culture</button>
      </div>
      <div className="news-list">
        {filteredArticles.map((article) => (
          <div key={article.id} className="news-card">
            <img src={article.image} alt={article.title} className="news-image" />
            <div className="news-content">
              <h3 className="news-title">{article.title}</h3>
              <p className="news-summary">{article.summary}</p>
              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
