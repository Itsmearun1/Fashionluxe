import React from "react";
import { Footer } from "../Components/Footer";
import MySwiper from "../Components/Myswiper";
import "./Home.css";
const sliderData=[{img: "https://www.catherines.com/dw/image/v2/BBKT_PRD/on/demandware.static/-/Sites-masterCatalog_Catherines/default/dwf6a3d80b/images/hi-res/2641_08082_mc_4497.jpg?sw=200&sh=288&sm=fit",title: "Wit & Whimsy Tees",price:3000},{img: "https://www.catherines.com/dw/image/v2/BBKT_PRD/on/demandware.static/-/Sites-masterCatalog_Catherines/default/dwe053eab9/images/hi-res/2631_33565_mc_0768.jpg?sw=200&sh=288&sm=fit",title: "Right Fit Curvey Jean",price:4250.00},
{img: "https://www.catherines.com/dw/image/v2/BBKT_PRD/on/demandware.static/-/Sites-masterCatalog_Catherines/default/dw5091b9e7/images/hi-res/2626_25647_mc_0047.jpg?sw=200&sh=288&sm=fit",title: "Yoga Pant",price:3000},{img: "https://www.catherines.com/dw/image/v2/BBKT_PRD/on/demandware.static/-/Sites-masterCatalog_Catherines/default/dw67c53e30/images/hi-res/2641_02753_mc_0133.jpg?sw=200&sh=288&sm=fit",title: "Raindrops Shimmer Tree",price:3000},
{img: "https://www.catherines.com/dw/image/v2/BBKT_PRD/on/demandware.static/-/Sites-masterCatalog_Catherines/default/dw2b6b1379/images/hi-res/2625_33764_mc_4436.jpg?sw=200&sh=288&sm=fit",title: "Suprema Capri",price:2150},{img: "https://www.catherines.com/dw/image/v2/BBKT_PRD/on/demandware.static/-/Sites-masterCatalog_Catherines/default/dwe81fc52c/images/hi-res/2625_33480_mc_4298.jpg?sw=200&sh=288&sm=fit",title: "Suprema Pant",price:2550},
{img: "https://www.catherines.com/dw/image/v2/BBKT_PRD/on/demandware.static/-/Sites-masterCatalog_Catherines/default/dw4b82243b/images/hi-res/2631_33551_mc_1687.jpg?sw=200&sh=288&sm=fit",title: "The Knit Jean",price:3850},{img: "https://www.catherines.com/dw/image/v2/BBKT_PRD/on/demandware.static/-/Sites-masterCatalog_Catherines/default/dw917abe63/images/hi-res/2607_33749_mc_7654.jpg?sw=200&sh=288&sm=fit",title: "Suprema cami",price:2760},
{img: "https://www.catherines.com/dw/image/v2/BBKT_PRD/on/demandware.static/-/Sites-masterCatalog_Catherines/default/dwd72d77ec/images/hi-res/2607_33779_mc_7772.jpg?sw=200&sh=288&sm=fit",title: "Suprema Tank",price:2000},{img: "https://www.catherines.com/dw/image/v2/BBKT_PRD/on/demandware.static/-/Sites-masterCatalog_Catherines/default/dw5b69b01f/images/hi-res/2626_33477_mc_0679.jpg?sw=200&sh=288&sm=fit",title: "Knit Legging",price:2000}
]

export const Home = () => {
  const Categories = () => {
    return (
      <div className="cat-div">
        <div>SHOP TOPS</div>
        <div>SHOP DRESSES</div>
        <div>SHOP BOTTOMS</div>
        <div>SHOP SWEATERS</div>
        <div>SHOP BLOUSES</div>
        <div>SHOP COATS & JACKETS</div>
        <div>SHOP ACTIVEWEAR</div>
        <div>SHOP LIZ&ME</div>
      </div>
    );
  };
  const ImageWrapper = ({ image, name }) => {
    return (
      <div className="img-wrapper">
        <img src={image} alt={name} />
      </div>
    );
  };
  return (
    <div>
      <div className="homechild">
        <div className="firstCard"> <img src="https://cdn-fsly.yottaa.net/5f90511cd93140f2cca8dcaa/www.catherines.com/v~4b.325/on/demandware.static/-/Sites-oss-Library/default/dwe12903b5/ca-images/plcc-images/platinum/ca-plcc-platinum-icon.svg?yocs=j_" alt="" />
          Save $20 on your first purchase of $25+ when you open and use a
          Catherines Platinum Credit Card!1,* Apply Now / Learn More
        </div>
        <ImageWrapper
          image="https://cdn-fsly.yottaa.net/5f90511cd93140f2cca8dcaa/www.catherines.com/v~4b.325/on/demandware.static/-/Sites-oss-Library/default/dwa190cb33/ca-images/homepage/2023/wk03/ca-0117-MainFeature_D.jpg?yocs=j_m_"
          name="first-img"
        />
        <ImageWrapper
          image="https://cdn-fsly.yottaa.net/5f90511cd93140f2cca8dcaa/www.catherines.com/v~4b.325/on/demandware.static/-/Sites-oss-Library/default/dw599a69c1/ca-images/homepage/2023/wk03/ca-0117-BestOf_D.jpg?yocs=j_m_"
          name="second-img"
        />
        <Categories />
        <ImageWrapper
          image="https://cdn-fsly.yottaa.net/5f90511cd93140f2cca8dcaa/www.catherines.com/v~4b.325/on/demandware.static/-/Sites-oss-Library/default/dw4d7025e9/ca-images/homepage/2023/wk03/ca-0117-Wardrobe_D.jpg?yocs=j_m_"
          name="third-img"
        />
        <ImageWrapper
          image="https://cdn-fsly.yottaa.net/5f90511cd93140f2cca8dcaa/www.catherines.com/v~4b.325/on/demandware.static/-/Sites-oss-Library/default/dw3c19d3e8/ca-images/homepage/2023/wk03/ca-0117-Dresses_D.jpg?yocs=j_m_"
          name="fourth-img"
        />
        <ImageWrapper
          image="https://cdn-fsly.yottaa.net/5f90511cd93140f2cca8dcaa/www.catherines.com/v~4b.325/on/demandware.static/-/Sites-oss-Library/default/dw6ac564f6/ca-images/homepage/2023/wk03/ca-0117-Suprema_D.jpg?yocs=j_m_"
          name="fifth-img"
        />
        <div className="middle-img">
          <ImageWrapper
            image="https://cdn-fsly.yottaa.net/5f90511cd93140f2cca8dcaa/www.catherines.com/v~4b.325/on/demandware.static/-/Sites-oss-Library/default/dwa107b2ac/ca-images/homepage/2023/wk03/ca-0117-Intimates.jpg?yocs=j_m_"
            name="sixth-img"
          />
          <ImageWrapper
            image="https://cdn-fsly.yottaa.net/5f90511cd93140f2cca8dcaa/www.catherines.com/v~4b.325/on/demandware.static/-/Sites-oss-Library/default/dw37487acc/ca-images/homepage/2023/wk03/ca-0117-Sleep.jpg?yocs=j_m_"
            name="seventh-img"
          />
        </div>
        <ImageWrapper
          image="https://cdn-fsly.yottaa.net/5f90511cd93140f2cca8dcaa/www.catherines.com/v~4b.325/on/demandware.static/-/Sites-oss-Library/default/dw4e8ca1c4/ca-images/homepage/2023/wk03/ca-0117-Shoes_D.jpg?yocs=j_m_"
          name="eigth-img"
        />
        <ImageWrapper
          image="https://cdn-fsly.yottaa.net/5ba91df3312e586b1ec06798/www.catherines.com/v~4b.58e/on/demandware.static/-/Sites-oss-Library/default/dw7d166f01/ca-images/ca-fsi/2022-ca-hp-shoes-promo-desktop-1x.jpg?yocs=17_"
          name="ninth-img"
        />
        <ImageWrapper
          image="https://cdn-fsly.yottaa.net/5f90511cd93140f2cca8dcaa/www.catherines.com/v~4b.325/on/demandware.static/-/Sites-oss-Library/default/dw552bea66/ca-images/homepage/2023/wk03/01-2023-CA-Outfitting-HP-Banner-011723_D.jpg?yocs=j_m_"
          name="tenth-img"
        />
        <ImageWrapper
          image="https://cdn-fsly.yottaa.net/5f90511cd93140f2cca8dcaa/www.catherines.com/v~4b.325/on/demandware.static/-/Sites-oss-Library/default/dw4bc22dfb/ca-images/homepage/2023/wk03/ca-0117-Clearance_D.jpg?yocs=j_m_"
          name="eleventh-img"
        />
        <div className="middle-img2">
          <ImageWrapper
            image="https://drive.google.com/uc?export&id=1W_fwZfwj2EBHOsAgYMI2zDnccDN2w78Y"
            name="sixth-img"
          />
          <ImageWrapper
            image="https://cdn-fsly.yottaa.net/5f90511cd93140f2cca8dcaa/www.catherines.com/v~4b.325/on/demandware.static/-/Sites-oss-Library/default/dw954a200f/ca-images/homepage/2023/wk03/ca-0117-catalog.png?yocs=j_"
            name="twelth-img"
          />
        </div>
       <div className="bottom-card">
        <img src="https://cdn-fsly.yottaa.net/5f90511cd93140f2cca8dcaa/www.catherines.com/v~4b.325/on/demandware.static/-/Sites-oss-Library/default/dwe12903b5/ca-images/plcc-images/platinum/ca-plcc-platinum-icon.svg?yocs=j_" alt="" />
        <h3>Don’t forget you can use your Catherines Platinum Credit Card on all FullBeauty purchases! LEARN MORE</h3>
       </div>
       <h2><b>Trending This Week</b></h2>
       <MySwiper sliderData={sliderData}/>
       <hr />
      </div>
      <Footer />
    </div>
  );
};
