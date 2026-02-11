import React from "react";
import Carousel from "../components/Carousel";
import ShopBy from "../components/ShopBy";
import GenInfo, { Brands } from "../components/GenInfo";

const Home = () => {
  
  const topBrandsProducts = [
    { name: "adidas", src:"/GenInfo/adidas.jpg", _id: "adidas" },
    { name: "Nikes", src:"/GenInfo/nikes.jpg", _id: "nikes" },
    { name: "Skechers", src:"/GenInfo/skechers.jpg", _id: "skechers" },
    { name: "Puma", src:"/GenInfo/puma.jpg", _id: "puma" },
  ];
  
  return (
    <div className="max-w-screen-xl xs:w-[95vw] xs:max-w-[95vw] md:w-full mx-auto ">
      <Carousel />
      <GenInfo />
      <Brands />
      <div className="md:w-full md:max-w-full xs:mx-2  sm:mx-auto ">
        <div className="prose prose-2xl">
          <ShopBy title="Best Sellers" filter="bestSellers" staticData={topBrandsProducts} />
        </div>
        <div className="prose prose-2xl">
          <ShopBy title="Top Rated" filter="topRated" />
        </div>
      </div>
    </div>
  );
};

export default Home;
