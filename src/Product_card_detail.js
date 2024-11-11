import React, { useState } from 'react';
import Description from './Description';
import UploadImg from './upload'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ProductList from './RecommendationProductList';
import CartSidebar from './CartSidebar';
import { Drawer, Avatar } from 'antd';
import Rating from './Rating'
import { UserOutlined } from '@ant-design/icons';
const productcard = [
  {
    id: "1",
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
    imageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/26/tee-5183448_640.jpg', // Replace with actual image URL

    subtitle: 'Milk',
    originalPrice: 449,
    discount: 13,
    category: 'Coffee'
  }
];


const Product_card_detail = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };
  const { id } = useParams();
  const product = productcard.find(item => item.id === id);
  if (!product) {
    return <p>Product not found.</p>;
  }
  return (
    <div style={{height:'2400px'}}>
      <div key={product.id} className="product-card1">
        <div className="product-image1">
          <img src={product.image} alt="Chaayos Cardamom Tea" />
        </div>
        <div className="product-details">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <div className="product-price">{product.price}</div>
          <div className="quantity-control">
            <button onClick={() => handleQuantityChange(-1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange(1)}>+</button>
          </div>
          <div className="availability">
            <span className="status-dot"></span> In Stock,Ready to Ship
          </div>
          <div className="product-buttons">
              <button className="add-to-cart-button" onClick={showDrawer}>Add To Cart</button>
            {/* <Link to={`/cartsidebar/${product.id}`} > */}

            <Drawer
              title="Your Cart"
              placement="right"
              onClose={onClose}
              open={visible}
              width={500} // Adjust the width as needed
            >
              <CartSidebar />
            </Drawer>
            {/* </Link> */}

            <Link to={`/buynow/${product.id}`}><button className="buy-now-button">Buy Now</button></Link>
          </div>
        </div>
      </div>
            <Description />
      <div   className='Review'>
      <h2  style={{width:'100px',paddingLeft:'30px'}}>Reviews</h2>
        <div className='reviewfill'>
          <Avatar  size={45} icon={<UserOutlined />} />

          <input  className='inputbox' type='text' placeholder='Review and upload '></input>
          <div  className='uploadimage'><UploadImg /></div>
        </div>
        <div className='rate'>
        <div className='rating'>
          <h2>Rate Our Product</h2>
          <Rating />
        </div>
        </div>
        <h2 style={{ paddingLeft: '30px' }}>Recommended Products</h2>
        <ProductList />
      </div>
    </div>

  );
};

export default Product_card_detail;
