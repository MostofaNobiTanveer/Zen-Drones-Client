import React from "react";
import { Link } from "react-router-dom";

const ReviewCTA = () => {
  return (
    <div class="pb-16">
      <div class="container px-3 mx-auto">
        <div class="max-w-5xl mx-auto grid grid-cols-12 grid-rows-12 lg:grid-rows-1">
          <div className=" z-10 lg:col-start-1 lg:col-span-4 lg:row-span-full md:col-start-4 md:col-span-6 sm:col-start-3 sm:col-span-7 col-start-2 col-span-10 row-start-1 row-span-5">
            <img
              class="w-44 sm:w-52 lg:w-full lg:max-w-xs object-cover transform -rotate-12 object-center rounded-3xl  h-full"
              src="https://i.ibb.co/mRMP1qC/business-3d-speech-balloon-50.png"
              alt="Bubble png"
            />
          </div>

          <div class="bg-gradient-to-br from-purple-400 to-indigo-300 lg:col-start-3 lg:col-span-10 lg:row-span-full sm:col-start-1 sm:col-span-full col-start-1 col-span-full rounded-xl row-start-3 row-span-6 pt-24 md:pt-20 md:pb-6 lg:pt-6">
            <div class="w-full p-4 h-full flex lg:pr-12 xl:pr-0 justify-center items-center">
              <div className="flex flex-col justify-center items-center max-w-xl lg:ml-20 space-y-4">
                <h2 class="sm:text-6xl text-center text-5xl sm:font-normal font-bold font-title tracking-wider text-white">
                  The stories we wear
                </h2>
                <p class="text-base text-purple-100 text-center">
                  Your satisfaction is our moto. Established to produce
                  innovative products safely and responsibly. We care about your
                  satisfaction and value of your opinion.
                </p>
                <div className="flex gap-4 flex-col sm:flex-row w-full justify-center">
                <Link
                  to="/reviews"
                  class="btn-secondary block w-full py-3 px-5 text-center bg-indigo-50 border border-transparent rounded-md shadow-md text-base font-medium text-indigo-700 sm:inline-block sm:w-auto"
                >
                  Browse Reviews
                </Link>
                <Link
                  to="/dashboard/review"
                  class="btn-secondary block w-full py-3 px-5 text-center bg-indigo-50 border border-transparent rounded-md shadow-md text-base font-medium text-indigo-700 sm:inline-block sm:w-auto"
                >
                  Leave a Review
                </Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCTA;
