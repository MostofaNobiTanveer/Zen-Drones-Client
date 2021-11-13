import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-3">
        <div className="max-w-6xl mx-auto grid grid-cols-12 grid-rows-12 lg:grid-rows-1">
          <div className="z-10 lg:col-start-1 lg:col-span-5 lg:row-span-full max-w-md md:col-start-4 md:col-span-6 sm:col-start-3 sm:col-span-7 col-start-2 col-span-10 row-start-1 row-span-5">
            <img
              className="object-cover object-center rounded-3xl w-full h-full"
              src="https://i.ibb.co/10G01c7/pngfind-com-drone-icon-png-6764838.png"
              alt="drone"
            />
          </div>

          <div className="bg-gradient-to-br from-purple-400 to-indigo-300 lg:col-start-3 lg:col-span-10 lg:row-span-full sm:col-start-1 sm:col-span-full col-start-1 col-span-full rounded-xl row-start-3 row-span-6 pt-24 md:pt-20 md:pb-6 lg:pt-6">
            <div className="w-full p-4 h-full flex lg:pr-12 xl:pr-0 justify-center items-center">
              <div className="flex flex-col justify-center items-center max-w-xlz lg:max-w-xl lg:ml-6 space-y-4">
                <h2 className="sm:text-6xl text-center text-5xl sm:font-normal font-bold font-title tracking-wider text-white">
                  Explore our birds
                </h2>
                <p className="text-base text-purple-100 text-center">
                  Our drones encompass superior quality, innovation, and
                  utility. From aerial photography and videography to inspection
                  solutions and more, we have drones that are optimal for every
                  application.
                </p>
                <Link
                  to="/drones"
                  className="btn-secondary block w-full py-3 px-5 text-center bg-blue-50 border border-transparent rounded-md shadow-md text-base font-medium text-indigo-700 sm:inline-block sm:w-auto"
                >
                  Browse Collections
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
