import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Myswiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


export default function App({ sliderData }) {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={5}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {sliderData.map((item,index) => (
          <SwiperSlide>
            <div className="slides">
            <img src={item.img} alt={index} />
            <h4>{item.title}</h4>
            <h4>₹{item.price}</h4>
            </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
