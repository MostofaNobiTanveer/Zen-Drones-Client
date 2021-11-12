import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div class="py-16">
      <div class="max-w-7xl mx-auto px-2">
        <div class="grid grid-cols-12 grid-rows-12 lg:grid-rows-1">
          <div className="z-10 lg:col-start-1 lg:col-span-5 lg:row-span-full max-w-md md:col-start-4 md:col-span-6 sm:col-start-3 sm:col-span-7 col-start-2 col-span-10 row-start-1 row-span-5">
            <img
              class="object-cover object-center rounded-3xl w-full h-full"
              src="https://i.ibb.co/10G01c7/pngfind-com-drone-icon-png-6764838.png"
              alt=""
            />
          </div>

          <div class="bg-gradient-to-br from-purple-400 to-indigo-300 lg:col-start-3 lg:col-span-10 lg:row-span-full sm:col-start-1 sm:col-span-full col-start-1 col-span-full rounded-xl row-start-3 row-span-6 pt-24 md:pt-20 md:pb-6 lg:pt-6">
            <div class="w-full p-4 h-full flex lg:pr-12 xl:pr-0 justify-center items-center">
              <div className="flex flex-col justify-center items-center xl:items-start max-w-xl lg:max-w-xl lg:ml-6 space-y-4">
                <h2 class="sm:text-6xl text-center text-5xl sm:font-normal font-bold font-title tracking-wider text-white">
                  Explore our birds
                </h2>
                <p class="text-base text-purple-100 md:text-left text-center">
                  Varius facilisi mauris sed sit. Non sed et duis dui leo,
                  vulputate id malesuada non. Cras aliquet purus dui laoreet
                  diam sed lacus, fames.
                </p>
                <Link
                  to="/explore-drones"
                  class="block w-full py-3 px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-indigo-700 hover:bg-gray-50 sm:inline-block sm:w-auto"
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
