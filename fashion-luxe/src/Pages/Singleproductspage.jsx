import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Singleproductspage.css";
import { Footer } from "../Components/Footer";
import MySwiper from "../Components/Myswiper";
const sliderData=[{img: "https://www.catherines.com/dw/image/v2/BBKT_PRD/on/demandware.static/-/Sites-masterCatalog_Catherines/default/dwf6a3d80b/images/hi-res/2641_08082_mc_4497.jpg?sw=200&sh=288&sm=fit",title: "Wit & Whimsy Tees",price:3000},{img: "https://www.catherines.com/dw/image/v2/BBKT_PRD/on/demandware.static/-/Sites-masterCatalog_Catherines/default/dwe053eab9/images/hi-res/2631_33565_mc_0768.jpg?sw=200&sh=288&sm=fit",title: "Right Fit Curvey Jean",price:4250.00},
{img: "https://www.catherines.com/dw/image/v2/BBKT_PRD/on/demandware.static/-/Sites-masterCatalog_Catherines/default/dw5091b9e7/images/hi-res/2626_25647_mc_0047.jpg?sw=200&sh=288&sm=fit",title: "Yoga Pant",price:3000},{img: "https://www.catherines.com/dw/image/v2/BBKT_PRD/on/demandware.static/-/Sites-masterCatalog_Catherines/default/dw67c53e30/images/hi-res/2641_02753_mc_0133.jpg?sw=200&sh=288&sm=fit",title: "Raindrops Shimmer Tree",price:3000},
{img: "https://www.catherines.com/dw/image/v2/BBKT_PRD/on/demandware.static/-/Sites-masterCatalog_Catherines/default/dw2b6b1379/images/hi-res/2625_33764_mc_4436.jpg?sw=200&sh=288&sm=fit",title: "Suprema Capri",price:2150},{img: "https://www.catherines.com/dw/image/v2/BBKT_PRD/on/demandware.static/-/Sites-masterCatalog_Catherines/default/dwe81fc52c/images/hi-res/2625_33480_mc_4298.jpg?sw=200&sh=288&sm=fit",title: "Suprema Pant",price:2550},
{img: "https://www.catherines.com/dw/image/v2/BBKT_PRD/on/demandware.static/-/Sites-masterCatalog_Catherines/default/dw4b82243b/images/hi-res/2631_33551_mc_1687.jpg?sw=200&sh=288&sm=fit",title: "The Knit Jean",price:3850},{img: "https://www.catherines.com/dw/image/v2/BBKT_PRD/on/demandware.static/-/Sites-masterCatalog_Catherines/default/dw917abe63/images/hi-res/2607_33749_mc_7654.jpg?sw=200&sh=288&sm=fit",title: "Suprema cami",price:2760},
{img: "https://www.catherines.com/dw/image/v2/BBKT_PRD/on/demandware.static/-/Sites-masterCatalog_Catherines/default/dwd72d77ec/images/hi-res/2607_33779_mc_7772.jpg?sw=200&sh=288&sm=fit",title: "Suprema Tank",price:2000},{img: "https://www.catherines.com/dw/image/v2/BBKT_PRD/on/demandware.static/-/Sites-masterCatalog_Catherines/default/dw5b69b01f/images/hi-res/2626_33477_mc_0679.jpg?sw=200&sh=288&sm=fit",title: "Knit Legging",price:2000}
]
const SingleProductPage = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState({});
  const productId = +localStorage.getItem("productId");
  const [product, setProduct] = useState({});
  console.log(productId);
  const addToCart = (product) => {
    let currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    product["quantity"]=1;
    currentCart.push(product);
    localStorage.setItem("cart", JSON.stringify(currentCart));
    alert("Product added to cart");
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
        <div className="product-price">₹{product.price}</div>
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
    <MySwiper sliderData={sliderData}/>
    <Footer/>
    </>
  );
};

export default SingleProductPage;
