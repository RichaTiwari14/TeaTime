// src/components/CartSidebar.js
import React from 'react';
import CartItem from './CartItem';
import RecommendedProducts from './RecommendedProducts';
import CheckoutSection from './CheckoutSection';
import { useParams } from 'react-router-dom';

// Define cart items
const productcard = [
    {
      id: "1",
      quantity:'1',
      size:'50ml',
      image: 'https://cdn.pixabay.com/photo/2017/11/24/16/29/tea-2975184_640.png', // Replace with actual image path
      imageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/26/tee-5183448_640.jpg', // Replace with actual image URL
      title: 'MASALA CHAI',
      subtitle: 'Milk',
      description: 'Instant Tea Premix- Masala Chai - Regular Sugar (36 Sachets) ',
      price: 549,
      category: 'Tea'
    },
    {
      id: "2",
      image: 'https://cdn.pixabay.com/photo/2017/11/24/16/29/tea-2975184_640.png', // Replace with actual image path
      imageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/26/tee-5183448_640.jpg', // Replace with actual image URL
      quantity:'1',
      size:'50ml',
      title: 'JAGGERY CHAI',
      description: 'Instant Tea Premix- Jaggery Flavour - Low Sugar (36 Sachets) ',
      price: 549,
      subtitle: 'Milk',
      category: 'Tea'
    },
    {
      id: "3",
      image: 'https://cdn.pixabay.com/photo/2017/11/24/16/29/tea-2975184_640.png', // Replace with actual image path
      title: 'SUGAR FREE CHAI',
      imageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/26/tee-5183448_640.jpg', // Replace with actual image URL
      description: 'Sugar Free Chai ',
      price: 549,
      quantity:'1',
      size:'50ml',
      subtitle: 'Milk',
      category: 'Tea'
    },
    {
      id: "4",
      image: 'https://cdn.pixabay.com/photo/2017/11/24/16/29/tea-2975184_640.png', // Replace with actual image path
      imageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/26/tee-5183448_640.jpg', // Replace with actual image URL
      title: 'GINGER SPECIAL CHAI',
      description: 'Instant Tea Premix- Ginger Special - Regular Sugar (36 Sachets) ',
      price: 549,
      quantity:'1',
      size:'50ml',
      subtitle: 'Milk',
      category: 'Tea'
    },
    {
      id: "5",
      imageUrl: 'https://cdn.pixabay.com/photo/2017/11/24/16/29/tea-2975184_640.png', // Replace with actual image URL
      image: 'https://cdn.pixabay.com/photo/2021/01/15/17/01/green-5919790_640.jpg', // Replace with actual image path
      title: 'CARDAMOM CHAI',
      description: 'Instant Tea Premix- Cardamom Flavour - Low Sugar (36 Sachets) | Cardamom Tea',
      price: 549,
      quantity:'1',
      size:'50ml',
      subtitle: 'Milk',
      category: 'Tea'
    },
    {
      id: "6",
      image: 'https://cdn.pixabay.com/photo/2017/11/24/16/29/tea-2975184_640.png', // Replace with actual image path
      title: 'KESAR CHAI',
      description: 'Instant Tea Premix - Kesar-Regular Sugar (15 Sachets) | Best Kesar Chai',
      imageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/26/tee-5183448_640.jpg', // Replace with actual image URL
      price: 389,
      quantity:'1',
      size:'50ml',
      originalPrice: 449,
      subtitle: 'Milk',
      discount: 13,
      category: 'Tea'
    },
    {
      id: "7",
      image: 'https://cdn.pixabay.com/photo/2017/11/24/16/29/tea-2975184_640.png', // Replace with actual image path
      title: 'Black Tea',
      imageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/26/tee-5183448_640.jpg', // Replace with actual image URL
      description: ' - Regular Sugar (15 Sachets) | Lemon Black tea',
      price: 389,
      quantity:'1',
      size:'50ml',
      originalPrice: 449,
      subtitle: 'Milk',
      discount: 13,
      category: ' Black Tea'
    },
    {
      id: "8",
      image: 'https://cdn.pixabay.com/photo/2017/11/24/16/29/tea-2975184_640.png', // Replace with actual image path
      title: 'Green Tea',
      description: 'Green Tea',
      imageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/26/tee-5183448_640.jpg', // Replace with actual image URL
      price: 389,
      quantity:'1',
      size:'50ml',
      originalPrice: 449,
      discount: 13,
      category: 'Black Tea',
      subtitle: 'Milk',
    },
    {
      id: "9",
      image: 'https://img.freepik.com/free-vector/hand-drawn-saffron-illustration_23-2149258222.jpg?ga=GA1.1.974320245.1728532047&semt=ais_hybrid', // Replace with actual image path
      title: 'KESAR MILK',
      description: ' Kesar-Regular Sugar (15 Sachets) |Healthy',
      price: 389,
      quantity:'1',
      size:'50ml',
      originalPrice: 449,
      imageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/26/tee-5183448_640.jpg', // Replace with actual image URL
      discount: 13,
      subtitle: 'Milk',
      category: 'Milk'
    },
    {
      id: "10",
      image: 'https://img.freepik.com/free-vector/hand-drawn-saffron-illustration_23-2149258222.jpg?ga=GA1.1.974320245.1728532047&semt=ais_hybrid', // Replace with actual image path
      title: 'HALDI MILK',
      imageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/26/tee-5183448_640.jpg', // Replace with actual image URL
      description: 'Haldi Doodh with Cheeni',
      price: 389,
      quantity:'1',
      size:'50ml',
      originalPrice: 449,
      discount: 13,
      subtitle: 'Milk',
      category: 'Milk'
    },
    {
      id: "11",
      image: 'https://img.freepik.com/premium-vector/illustration-milkshake_498740-22158.jpg?ga=GA1.1.974320245.1728532047&semt=ais_hybrid', // Replace with actual image path
      imageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/26/tee-5183448_640.jpg', // Replace with actual image URL
      title: 'CHOCHLATE MILK',
      description: 'Chochalate Milk| Low Calories',
      price: 389,
      quantity:'1',
      size:'50ml',
      subtitle: 'Milk',
      originalPrice: 449,
      discount: 13,
      category: 'Milk'
    },
    {
      id: "12",
      image: 'https://img.freepik.com/premium-photo/coconut-cookies_687470-1377.jpg?ga=GA1.1.974320245.1728532047&semt=ais_hybrid', // Replace with actual image path
      title: 'Cookies',
      imageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/26/tee-5183448_640.jpg', // Replace with actual image URL
      description: 'Coconut Cookies',
      price: 389,
      quantity:'1',
      size:'50ml',
      subtitle: 'Milk',
      originalPrice: 449,
      discount: 13,
      category: 'Snacks'
    },
    {
      id: "13",
      image: 'https://img.freepik.com/premium-photo/tasty-crispbread-isolated-white_392895-133800.jpg?ga=GA1.1.974320245.1728532047&semt=ais_hybrid', // Replace with actual image path
      title: 'WHOLE WHEAT COOKIES',
      imageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/26/tee-5183448_640.jpg', // Replace with actual image URL
      description: 'Whole Wheat Cookies| Made with Whole Grain',
      price: 389,
      quantity:'1',
      size:'50ml',
      subtitle: 'Milk',
      originalPrice: 449,
      discount: 13,
      category: 'Snacks'
    },
    {
      id: "14",
      image: 'https://img.freepik.com/free-photo/indian-patisserie-products-with-chocolate-sauce_23-2148295022.jpg?ga=GA1.1.974320245.1728532047&semt=ais_hybrid', // Replace with actual image path
      title: 'KHAKHRI',
      imageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/26/tee-5183448_640.jpg', // Replace with actual image URL
      description: 'Namkeen',
      price: 389,
      quantity:'1',
      size:'50ml',
      subtitle: 'Milk',
      originalPrice: 449,
      discount: 13,
      category: 'Snacks'
    },
    {
      id: "15",
      image: 'https://img.freepik.com/free-vector/flat-paper-coffee-cup_23-2147741046.jpg?ga=GA1.1.974320245.1728532047&semt=ais_hybrid', // Replace with actual image path
      imageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/26/tee-5183448_640.jpg', // Replace with actual image URL
      title: 'COLD COFFEE',
      description: 'Regular Sugar (15 Sachets) ',
      price: 389,
      quantity:'1',
      size:'50ml',
      subtitle: 'Milk',
      originalPrice: 449,
      discount: 13,
      category: 'Coffee'
    },
    {
      id: "18",
      image: 'https://img.freepik.com/free-vector/flat-paper-coffee-cup_23-2147741046.jpg?ga=GA1.1.974320245.1728532047&semt=ais_hybrid', // Replace with actual image path
      title: 'EXPRRESSO',
      description: 'Low Sugar',
      price: 389,
      quantity:'1',
      size:'50ml',
      imageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/26/tee-5183448_640.jpg', // Replace with actual image URL
      originalPrice: 449,
      discount: 13,
      subtitle: 'Milk',
      category: 'Coffee'
    },
    {
      id: "16",
      image: 'https://img.freepik.com/free-vector/flat-paper-coffee-cup_23-2147741046.jpg?ga=GA1.1.974320245.1728532047&semt=ais_hybrid', // Replace with actual image path
      title: 'CAPPUCCINO',
      description: 'Good Quality Milk | Frothier | Robust Flavour',
      price: 389,
      quantity:'1',
      size:'50ml',
      imageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/26/tee-5183448_640.jpg', // Replace with actual image URL
      subtitle: 'Milk',
      originalPrice: 449,
      discount: 13,
      category: 'Coffee'
    },
    {
      id: "17",
      image: 'https://img.freepik.com/free-vector/flat-paper-coffee-cup_23-2147741046.jpg?ga=GA1.1.974320245.1728532047&semt=ais_hybrid', // Replace with actual image path
      title: 'LATTE',
      description: 'Mild and Smooth|Creemier',
      price: 389,
      quantity:'1',
      size:'50ml',
      imageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/26/tee-5183448_640.jpg', // Replace with actual image URL
  
      subtitle: 'Milk',
      originalPrice: 449,
      discount: 13,
      category: 'Coffee'
    }
  ];
function CartSidebar() {
    const { id } = useParams();
    
    // Retrieve the item based on the ID from URL parameters
    const item = productcard.find(item => item.id === id);

    // If item is undefined, show a message or return null
    if (!item) {
        return <div>Item not found in cart.</div>;
    }

    // Calculate the subtotal for the single item or default to 1 if quantity is not specified
    const subtotal = item.price * (item.quantity || 1);

    return (
        <div className='cart-bg'>
            <div className="cart-sidebar">
                <h2>Items in your cart</h2>

                {/* Render the item in the cart */}
                <CartItem key={item.id} item={item} />

                {/* Render additional components */}
                <RecommendedProducts />
                <CheckoutSection subtotal={subtotal} />
            </div>
        </div>
    );

}

export default CartSidebar;
