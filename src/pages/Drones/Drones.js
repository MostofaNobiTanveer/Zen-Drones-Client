import React from "react";
import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";
import ProductList from "../../shared/ProductList";
import ScrollToTop from "../../utilities/ScrollToTop";

const Drones = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <section className="overflow-hidden bg-gradient-to-br from-purple-400 to-indigo-300">
        <div class="relative max-w-6xl mx-auto pt-8 lg:pt-12">
          <div className="transform sm:translate-y-6 translate-y-4 leading-sung inline-block pt-20 font-title sm:tracking-wide uppercase font-bold text-gray-100 text-6xl sm:text-7xl md:text-8xl">
            <h1>
              Explore <br /> World's top <br /> drone collections
            </h1>
          </div>
        </div>
      </section>
      <ProductList cardCount={Infinity} />
      <Footer />
    </>
  );
};

export default Drones;
