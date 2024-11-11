import React from 'react';
import { Carousel } from 'antd';
const Description = () => {
  const descriptions = [
    " Instant Masala Tea Premix - Cardamom Flavor: Enjoy the authentic taste of cardamom chai with this low-sugar, convenient tea premix.",
    "Perfect for travel or office breaks: Just add hot water, stir, and enjoy a fresh cup of chai anytime, anywhere.",
    "Each pack contains 36 sachets, offering a rich, flavorful experience with every sip. Low in sugar, ideal for health-conscious tea lovers.",
    "Made with high-quality ingredients, ensuring a delightful aroma and taste in every sip. A perfect blend for tea lovers who enjoy a touch of cardamom."
  ];

  
  return (
    <div className="description-slider">
      <div className="description-box">
        <h2>Description:</h2>
        <p>{descriptions}</p>
      </div>
      <div className='slider-container'>
        <Carousel autoplay className='slider-image'>
          <img src='https://img.freepik.com/premium-photo/masala-tea-with-spices_117406-1010.jpg?ga=GA1.1.974320245.1728532047&semt=ais_siglip' alt=''></img>
          <img src='https://img.freepik.com/free-vector/indian-spices-recipe-composition_1284-35895.jpg?ga=GA1.1.974320245.1728532047&semt=ais_siglip' alt=''></img>
        </Carousel>
      </div>

    </div>
  );
};

export default Description;
