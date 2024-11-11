import React from 'react'
import Image from './tlogo.webp'
import './ext.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function header1() {
  return (
    <div >

      <div className='d'>
      <a href='/'> <img src={Image}></img></a>
        <div className='header'>
          <ul><Link to={"/home"}><li> HOMEPAGE</li></Link>
          <Link to={"/about"}><li> ABOUT US</li></Link>
            <Link to={"/product"}><li> PRODUCT</li></Link>
            <Link to={"/news"}><li> NEWS</li></Link>
            <Link to={"/contactsection"}><li> CONTACT US</li></Link>
          </ul>
      
        </div>

         <div className='icon'>
       <a href='/' > <FontAwesomeIcon icon={faTwitter} /></a>
       <a href='/' >  <FontAwesomeIcon icon={faFacebook} /></a>
       <a href='/' > <FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>

    </div>
  )
}

export default header1