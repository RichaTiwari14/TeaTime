
import './ext.css';
import Image1 from './tlogo (1).webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

function Footer2() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log('Form submitted:', inputValue);
  };
  return (
    <div className='footer'>
      <div className='footer1'>
        <img src={Image1} alt="Logo" />
        <p>Pellentesque id rhoncus augue nec maximus enim nunc commodo purus sit</p>
        <p>
          <FontAwesomeIcon icon={faPhone} style={{ color: ' rgb(167, 202, 153)' }} /> (657) 123-456
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} style={{ color: ' rgb(167, 202, 153)' }} /> contact@website.com
        </p>
        <p>
          <FontAwesomeIcon icon={faClock} style={{ color: ' rgb(167, 202, 153)' }} /> Mon - Fri / 9:00 AM - 6:00 PM
        </p>
      </div>
      
      <div className='footer2'>
        <p>INFORMATION</p>
        
          <p><a href='/'>About Us</a></p>
          <p><a href='/'>Store Location</a></p>
          <p><a href='/'>Contact Us</a></p>
          <p><a href='/'>Shipping & Delivery</a></p>
          <p><a href='/'>Latest News</a></p>
          <p><a href='/'>Our Sitemap</a></p>
        
      </div>
      
      <div className='footer3'>
        <p>OUR SERVICE</p>
        
          <p><a href='/'>Privacy Policy </a></p>
          <p><a href='/'>Terms of Sale</a></p>
          <p><a href='/'>Customer Service</a></p>
          <p><a href='/'>Delivery Information</a></p>
          <p><a href='/'>Payments</a></p>
          <p><a href='/'>Saved Cards</a></p>
        
      </div>
      
      <div className='footer4'>
        <p>NEWSLETTER</p>
        <p>Subscribe to our mailing list to get the new updates!</p>
        <div>
        <form onSubmit={handleSubmit} className='form'>
      <label className='int'>
       
        <input
          type="text"
          placeholder='Enter your email'
          value={inputValue}
          onChange={handleChange}
          required  
        />
      </label>
      <button className='btn' type="submit">Submit</button>
    </form>
       
        </div>
     <br></br>
      <label>
        <input
          type="checkbox"
        
        />
      Accept GDPR Terms
      </label>
     
 
      </div>
    </div>
  );
}

export default Footer2;
