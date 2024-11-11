import React from 'react';
import {categories} from './Product'
import ProductCard from './Product_card';
import { Link, useParams } from 'react-router-dom';

export const productcard = [
  {
    id: "1",
    image: 'https://cdn.pixabay.com/photo/2021/01/15/17/01/green-5919790_640.jpg', // Replace with actual image path
    imageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/26/tee-5183448_640.jpg', // Replace with actual image URL
    title: 'MASALA CHAI',
    subtitle: 'Milk',
    description: 'Instant Tea Premix- Masala Chai - Regular Sugar (36 Sachets) ',
    price: 549,
    category: 'Tea'
  },
  {
    id: "2",
    image: 'https://cdn.pixabay.com/photo/2021/01/15/17/01/green-5919790_640.jpg', // Replace with actual image path
    imageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/26/tee-5183448_640.jpg', // Replace with actual image URL
    title: 'JAGGERY CHAI',
    description: 'Instant Tea Premix- Jaggery Flavour - Low Sugar (36 Sachets) ',
    price: 549,
    subtitle: 'Milk',
    category: 'Tea'
  },
  {
    id: "3",
    image: 'https://cdn.pixabay.com/photo/2021/01/15/17/01/green-5919790_640.jpg', // Replace with actual image path
    title: 'SUGAR FREE CHAI',
    imageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/26/tee-5183448_640.jpg', // Replace with actual image URL
    description: 'Sugar Free Chai ',
    price: 549,
    subtitle: 'Milk',
    category: 'Tea'
  },
  {
    id: "4",
    image: 'https://cdn.pixabay.com/photo/2021/01/15/17/01/green-5919790_640.jpg', // Replace with actual image path
    imageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/26/tee-5183448_640.jpg', // Replace with actual image URL
    title: 'GINGER SPECIAL CHAI',
    description: 'Instant Tea Premix- Ginger Special - Regular Sugar (36 Sachets) ',
    price: 549,
    subtitle: 'Milk',
    category: 'Tea'
  },
  {
    id: "5",
    imageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/26/tee-5183448_640.jpg', // Replace with actual image URL
    image: 'https://cdn.pixabay.com/photo/2021/01/15/17/01/green-5919790_640.jpg', // Replace with actual image path
    title: 'CARDAMOM CHAI',
    description: 'Instant Tea Premix- Cardamom Flavour - Low Sugar (36 Sachets) | Cardamom Tea',
    price: 549,
    subtitle: 'Milk',
    category: 'Tea'
  },
  {
    id: "6",
    image: 'https://cdn.pixabay.com/photo/2021/01/15/17/01/green-5919790_640.jpg', // Replace with actual image path
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
    image: 'https://cdn.pixabay.com/photo/2021/01/15/17/01/green-5919790_640.jpg', // Replace with actual image path
    title: 'Black Tea',
    imageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/26/tee-5183448_640.jpg', // Replace with actual image URL
    description: ' - Regular Sugar (15 Sachets) | Lemon Black tea',
    price: 389,
    originalPrice: 449,
    subtitle: 'Milk',
    discount: 13,
    category: ' Tea'
  },
  {
    id: "8",
    image: 'https://cdn.pixabay.com/photo/2021/01/15/17/01/green-5919790_640.jpg', // Replace with actual image path
    title: 'Green Tea',
    description: 'Green Tea',
    imageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/26/tee-5183448_640.jpg', // Replace with actual image URL
    price: 389,
    originalPrice: 449,
    discount: 13,
    category: 'Tea',
    subtitle: 'Milk',
  },
  {
    id: "9",
    image: 'https://cdn.pixabay.com/photo/2021/01/15/17/01/green-5919790_640.jpg', // Replace with actual image path
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
    image: 'https://cdn.pixabay.com/photo/2021/01/15/17/01/green-5919790_640.jpg', // Replace with actual image path
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
    image: 'https://cdn.pixabay.com/photo/2021/01/15/17/01/green-5919790_640.jpg', // Replace with actual image path
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
    image: 'https://cdn.pixabay.com/photo/2021/01/15/17/01/green-5919790_640.jpg', // Replace with actual image path
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
    image: 'https://cdn.pixabay.com/photo/2021/01/15/17/01/green-5919790_640.jpg', // Replace with actual image path
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
    image: 'https://cdn.pixabay.com/photo/2021/01/15/17/01/green-5919790_640.jpg', // Replace with actual image path
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
    image: 'https://cdn.pixabay.com/photo/2021/01/15/17/01/green-5919790_640.jpg', // Replace with actual image path
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
    image: 'https://cdn.pixabay.com/photo/2021/01/15/17/01/green-5919790_640.jpg', // Replace with actual image path
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
    image: 'https://cdn.pixabay.com/photo/2021/01/15/17/01/green-5919790_640.jpg', // Replace with actual image path
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
    image: 'https://cdn.pixabay.com/photo/2021/01/15/17/01/green-5919790_640.jpg', // Replace with actual image path
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

const ProductList = () => {

  const { category } = useParams();

  const productcards = productcard.filter(item =>
    categories.some(cat => cat.category === category && item.category === category)
  );
    return (

    <div className="product-list">
      {productcards.map(product => (
        <Link to={`/productcarddetail/${product.id}`} key={product.id}>
          <ProductCard
            id={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            originalPrice={product.originalPrice}
            discount={product.discount}
            category={product.category}
          />
        </Link>

      ))}
    </div>
  );
};

export default ProductList;
