import React from "react";
import "./index.css";
function ContactSection() {
  return (
    <div className="contactsection_outer">
  <div className="contactsection_main"></div>
    <div className="contactsection">
      <h1>Contact Us</h1>
      <table>
        <tr>
          <td>
            <input
              type="text"
              className="name"
              placeholder="Your Name*"
            ></input>
          </td>
          
        </tr>
        
        <tr>
          <td>
           <input
              type="number"
              className="name"
              placeholder="Phone Number*"
            ></input>
          </td>
        </tr>
        
        <tr>
          <td>
           <input
              type="email"
              className="name"
              placeholder="Email*"
            ></input>
          </td>
        </tr>
        <tr>
          <td>
           <input
              type="text"
              className="name"
              placeholder="How many persons?*"
            ></input>
          </td>
        </tr>
      </table>
      <button>BOOK NOW</button>
    </div>
    <div  className="contactsection_inner"> 
    </div>
    <div className="contacts3">
      <table>
        <tr>
          <th>Call Us</th>
          <th>Location</th>
          <th>Email</th>
        </tr>
        <tr>
          <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.eveniet ab est corporis tempore.</td>
          <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.eveniet ab est corporis tempore.</td>
          <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.eveniet ab est corporis tempore.</td>
        </tr>
      </table>
    </div>
    </div>
  );
}

export default ContactSection;
