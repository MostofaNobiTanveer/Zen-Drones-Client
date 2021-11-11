import React from "react";
import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";
import ProductList from "../../shared/ProductList";
import ScrollToTop from "../../utilities/ScrollToTop";
import Banner from "./Banner";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Banner />
      {/* <ProductList cardCount={Infinity} /> */}
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
};

export default Home;
