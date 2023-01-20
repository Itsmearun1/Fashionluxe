import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Singleproductspage.css";
import { Footer } from "../Components/Footer";
const SingleProductPage = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState({});
  const productId = +localStorage.getItem("productId");
  const [product, setProduct] = useState({});
  console.log(productId);
  const addToCart = (product) => {
    let currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    currentCart.push(product);
    localStorage.setItem("cart", JSON.stringify(currentCart));
  };
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `https://63c6507adcdc478e15beeebb.mockapi.io/products/${productId}`
        );
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, [productId]);

  return (
    <>
    <div className="single-product-page">
      <div className="product-images">
        <img
          src={currentImage[product.id] || product.img1}
          alt={product.name}
          onMouseEnter={() => {
            setCurrentImage({ ...currentImage, [product.id]: product.img2 });
          }}
          onMouseLeave={() => {
            setCurrentImage({ ...currentImage, [product.id]: "" });
          }}
        />
      </div>
      <div className="product-info">
        <div className="product-name">{product.name}</div>
        <div className="product-price">${product.price}</div>
        <div className="product-color">
          <h3>Color</h3>
          {product.color}
        </div>
        <button
          onClick={() => {
            addToCart(product);
          }}
        >
          Add to Cart
        </button>
        <div className="product-description">
          <h3>Details</h3>
          {product.Description}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default SingleProductPage;
