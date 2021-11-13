import React from "react";
import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";
import ReviewList from "../../shared/ReviewList";
import ScrollToTop from "../../utilities/ScrollToTop";

const Reviews = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <section className="overflow-hidden bg-gradient-to-br from-purple-400 to-indigo-300">
        <div className="relative max-w-6xl mx-auto pt-8 lg:pt-12">
          <div className="transform sm:translate-y-6 translate-y-4 leading-sung inline-block pt-20 font-title sm:tracking-wide uppercase font-bold text-gray-100 text-6xl sm:text-7xl md:text-8xl">
            <h1>
              The <br /> center of <br />
              our universe
            </h1>
          </div>
          <div className="absolute right-8 sm:right-20 lg:right-32 top-20 md:top-24">
            <img
              className="w-44 sm:w-48 md:w-60 lg:w-full lg:max-w-xs transform rotate-12 lg:rotate-6 max-w-xs h-full object-cover object-center"
              src="https://i.ibb.co/mRMP1qC/business-3d-speech-balloon-50.png"
              alt="Feature Drone"
            />
          </div>
        </div>
      </section>
      <ReviewList reviewCount={Infinity} />
      <Footer />
    </>
  );
};

export default Reviews;
