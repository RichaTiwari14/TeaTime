import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './Product';
import ProductList from './ProductList';
import BuyNow from './BuyNow';
import ProductCardDetail from './Product_card_detail';
import Header from "./header1"
import Footer from "./footer2"
import Home from "./home"
import Contact from "./ContactSection"
import About from "./about2"
import News from "./news"
import CartSidebar from './CartSidebar';
function App() {
  return (
    <div>
      <BrowserRouter> 
      <Header/>      
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/productlist' element={<ProductList/>}/>
          <Route path="/productlist/category/:category" element={<ProductList />} />
          <Route path='/productcarddetail/:id' element={<ProductCardDetail />} />
          <Route path='/buynow/:id' element={<BuyNow />} />
          <Route path='/contactsection' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/home' element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/cartsidebar/:id' element={<CartSidebar/>}/>
          {/* Fallback route for undefined paths */}
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
