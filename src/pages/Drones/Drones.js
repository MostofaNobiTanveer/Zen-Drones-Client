import React from "react";
import Navbar from "../../shared/Navbar";

const Drones = () => {
  return (
    <>
      <Navbar />
      <section className="overflow-hidden bg-gradient-to-br from-blue-400 to-red-200">
        <div class="relative max-w-6xl mx-auto pt-8 lg:pt-12">
          <div className="transform sm:translate-y-6 translate-y-3 leading-sung inline-block pt-32 font-title sm:tracking-wide uppercase font-bold text-woodsmoke-100 text-6xl sm:text-7xl md:text-8xl">
            <h1>
              Explore <br /> World's top <br /> drone collections
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Drones;
