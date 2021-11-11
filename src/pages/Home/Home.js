import React from "react";
import Navbar from "../../shared/Navbar";
import ProductList from "../../shared/ProductList";
import Banner from "./Banner";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      {/* <ProductList cardCount={Infinity} /> */}
      {/* <Testimonials /> */}
    </>
  );
};

export default Home;
