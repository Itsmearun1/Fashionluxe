import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Products.css"

const Products = () => {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [filterBy, setFilterBy] = useState('');
  const [currentImage, setCurrentImage] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://63c6507adcdc478e15beeebb.mockapi.io/products')
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  }

  const handleFilterChange = (e) => {
    setFilterBy(e.target.value);
  }

  const filteredAndSortedProducts = products
    .filter(product => {
      if (!filterBy) {
        return true;
      }
      return product.category === filterBy;
    })
    .sort((a, b) => {
      if (sortBy === 'featured') {
        return a.featured - b.featured;
      } else if (sortBy === 'top-rated') {
        return b.rating - a.rating;
      } else if (sortBy === 'highest-price') {
        return b.price - a.price;
      } else if (sortBy === 'lowest-price') {
        return a.price - b.price;
      }
    });

  return (
    <div className="product-page">
      <div className="sidebar">
        <div className="section-title">CATEGORY</div>
        <div>Casual Dresses</div>
        <div>Mother of the Bride</div>
        <div>Special Occasion</div>
        <div>Jacket Dresses</div>
        <div>Pant Suits</div>
        <div>Dress Sets</div>
        <div>Curvy Dresses</div>
        <div>Liz & Me Dresses</div>
        <div>Petite Dresses</div>
        <div>Dresses by Length</div>
        <div>Wear Underneath</div>
        <div className="section-title">SORT BY</div>
        <select onChange={handleSortChange}>
          <option value="featured">Featured</option>
          <option value="top-rated">Top Rated</option>
          <option value="highest-price">Highest Price</option>
          <option value="lowest-price">Lowest Price</option>
        </select>
        <div className="section-title">FILTER BY</div>
        <select onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="Casual Dresses">Casual Dresses</option>
          <option value="Mother of the Bride">Mother of the Bride</option>
          <option value="Special Occasion">Special Occasion</option>
          <option value="Jacket Dresses">Jacket Dresses</option>
          <option value="Pant Suits">Pant Suits</option>
          <option value="Dress Sets">Dress Sets</option>
          <option value="Curvy Dresses">Curvy Dresses</option>
          <option value="Liz & Me Dresses">Liz & Me Dresses</option>
          <option value="Petite Dresses">Petite Dresses</option>
          <option value="Dresses by Length">Dresses by Length</option>
          <option value="Wear Underneath">Wear Underneath</option>
        </select>
      </div>
      <div className="product-grid">
        {filteredAndSortedProducts.map((product, index) => (
           <div className="product-card" key={product.id} onClick={() =>{
            navigate(`/products/${product.id}`);localStorage.setItem('productId', product.id);
           } }>
            <img src={currentImage[product.id] || product.img1} alt={product.name}
              onMouseEnter={() => {
                setCurrentImage({...currentImage,[product.id]: product.img2});
              }}
              onMouseLeave={() => {
                setCurrentImage({...currentImage,[product.id]: ''});
              }}
            />
            <div className="product-info">
              <div className="product-name">{product.name}</div>
              <div className="product-price">${product.price}</div>
              <div className="product-rating">{product.rating}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

