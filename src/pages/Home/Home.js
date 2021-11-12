import React from "react";
import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";
import ProductList from "../../shared/ProductList";
import ScrollToTop from "../../utilities/ScrollToTop";
import Banner from "./Banner";
import CTA from "./CTA";
import Features from "./Features";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Banner />
      <Features />
      <ProductList cardCount={Infinity} />
      <CTA />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
