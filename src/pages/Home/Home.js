import React from "react";
import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";
import ProductList from "../../shared/ProductList";
import ReviewList from "../../shared/ReviewList";
import ScrollToTop from "../../utilities/ScrollToTop";
import Banner from "./Banner";
import CTA from "./CTA";
import Features from "./Features";

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Banner />
      <Features />
      <ProductList cardCount={Infinity} />
      <CTA />
      <ReviewList reviewCount={2} />
      <Footer />
    </>
  );
};

export default Home;
