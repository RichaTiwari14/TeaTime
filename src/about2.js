import React from 'react';
import './ext.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function About2() {
  return (
    <div>
      <h1 style={{marginTop:'60px',marginBottom:'60px'}} className="h1">About Us</h1>
      <div className="aboutdiv">
        <div className="dive1">
          <h1>Our Story</h1>
          <p>Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea</p>
          <p>
            Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed dolor eos diam lorem
            eirmod. Amet sit amet amet no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut. Labor diam
            sed ipsum et eirmod
          </p>
          <button>Learn More</button>
        </div>

        <div className="dive2"></div>

        <div className="dive3">
          <h1>Our Vision</h1>
          <p>
            Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor
            kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor
          </p>
          <div className='fonticon'>
           <p><span> <FontAwesomeIcon icon={faCheck}  /></span>Lorem ipsum dolor sit amet</p>
            <p><span><FontAwesomeIcon icon={faCheck}  /></span>Lorem ipsum dolor sit amet</p>
           <p> <span><FontAwesomeIcon icon={faCheck}  /></span>Lorem ipsum dolor sit amet</p>
          </div>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default About2;
