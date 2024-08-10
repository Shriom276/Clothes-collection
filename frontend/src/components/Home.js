import React from 'react';
import { useCart } from '../CartContext';
import { useNavigate } from 'react-router-dom';
import '../style.css'; 

import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import image5 from '../images/image5.png';
import image6 from '../images/image6.png';
import image7 from '../images/image7.png';
import image8 from '../images/image8.png';
import image9 from '../images/image9.png';

function Home() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const products = [
    // Formal Clothes
    { id: 1, name: 'Formal Suits', description: 'A comfortable formal suit', price: 19.99, imageUrl: image1, category: 'Formal' },
    { id: 2, name: 'Formal Dress', description: 'Stylish formal dress', price: 29.99, imageUrl: image2, category: 'Formal' },
    { id: 3, name: 'Formal Shirt', description: 'Comfortable formal shirt', price: 39.99, imageUrl: image3, category: 'Formal' },

    // Casual Clothes
    { id: 4, name: 'Casual Shirt', description: 'A smart casual shirt', price: 24.99, imageUrl: image4, category: 'Casual' },
    { id: 5, name: 'Casual T-shirt', description: 'Elegant casual t-shirt', price: 34.99, imageUrl: image5, category: 'Casual' },
    { id: 6, name: 'Casual T-shirt', description: 'Classic casual t-shirt for girls', price: 44.99, imageUrl: image6, category: 'Casual' },

    // Sports Clothes
    { id: 7, name: 'Sports T-Shirt', description: 'Breathable sports t-shirt', price: 14.99, imageUrl: image7, category: 'Sports' },
    { id: 8, name: 'Sports T-Shirt', description: 'Lightweight sports t-shirt', price: 24.99, imageUrl: image8, category: 'Sports' },
    { id: 9, name: 'Running Pants', description: 'High-performance running pants', price: 49.99, imageUrl: image9, category: 'Sports' },
  ];

  const handleBuyNow = (product) => {
    addToCart(product);
    navigate('/cart');
  };

  const renderCategory = (category) => (
    <div className="category-section">
      <h2>{category} Clothes</h2>
      <div className="products">
        {products.filter(product => product.category === category).map(product => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => handleBuyNow(product)}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="home">
      {renderCategory('Formal')}
      {renderCategory('Casual')}
      {renderCategory('Sports')}
    </div>
  );
}

export default Home;
