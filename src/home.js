import React from 'react'
import IMAGE1 from './image1.png'
import IMAGE2 from './image2.png'
import IMAGE3 from './image3.png'
import IMAGE4 from './image4.png'
import IMAGE5 from './masala-tea-8020912_640.webp'
import IMAGE6 from './coffe.jpg'
import IMAGE7 from './biscit.jpg'
import IMAGE8 from './milk.jpg'
import {Link} from 'react-router-dom'
function home() {
  return (
    <div>
      <div id='main-content'>
        <h3>GO NATURAL</h3>
        <h1>the best time to drink tea</h1>
        <p>?Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          1 Ut elit tellus, luctus nec ullamcorper mattis,
          <br/> pulvinar dapibus leo dolor sit amet, consectetur adipiscing eli.</p>
        <button>show more</button>
      </div>
      <div id='main-content1'>
      <h1>Tea is a Drink of Health</h1><br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus <br/>
        leo ipsum dolor sit amet,
        consectetur adipiscing elit. Ut elit tellus, 
        luctus nec ullamcorper ipsum dolor sit amet, <br/>
         consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper</p>
      </div>
      <div id='main-content2'>
       <div id='card'>
        <img src={IMAGE1}/>
        <h2>Free Shipping</h2>
        <p>Lorem ipsum dolor sit amet, consectetur <br/>
         adipiscing elit.Ut elit tellus, luctus nec <br/>
          ullamcorper mattis,</p>
       </div>
       <div id='card'>
       <img src={IMAGE2}/>
       <h2>Order Online</h2>
       <p>Lorem ipsum dolor sit amet, consectetur <br/>
         adipiscing elit.Ut elit tellus, luctus nec <br/>
          ullamcorper mattis,</p>
       </div>
       <div id='card'>
       <img src={IMAGE3}/>
       <h2>More Freshness</h2>
       <p>Lorem ipsum dolor sit amet, consectetur <br/>
         adipiscing elit.Ut elit tellus, luctus nec <br/>
          ullamcorper mattis,</p>
       </div>
       <div id='card'>
       <img src={IMAGE4}/>
       <h2>Safe Payment</h2>
        <p>Lorem ipsum dolor sit amet, consectetur <br/>
         adipiscing elit.Ut elit tellus, luctus nec <br/>
          ullamcorper mattis,</p>
       </div>
      </div>
      <div id='menu-outer'>
      <h1>MENU</h1>
      <Link to='/product'>
      <div id='menu-div1'>
        <div id='inner-div1'>
          <img src={IMAGE5}/>
          <h1>TEa</h1>
          </div>
        <div id='inner-div1'>
        <img src={IMAGE8}/>
        <h1>MiLk</h1>
        </div>
        <div id='inner-div1'>
          <img src={IMAGE6}/>
          <h1>CoFFee</h1>
          </div>
        <div id='inner-div1'>
          <img src={IMAGE7}/>
          <h1>SnacKs</h1>
          </div>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default home;
