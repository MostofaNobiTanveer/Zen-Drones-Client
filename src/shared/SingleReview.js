import React from "react";
import { useAuthContext } from "../contexts/AuthProvider";
import Rating from "../utilities/Rating";

const SingleReview = () => {
  const { user } = useAuthContext();
  return (
    <div class="flex items-center justify-center pt-5 pb-10">
      <div class="w-full mx-auto max-w-xl rounded-lg bg-gradient-to-br from-purple-400 to-indigo-400 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
        <div class="w-full pt-1 text-center pb-2 -mt-16 mx-auto">
          <img
            alt="profil"
            src={user.photoURL}
            class="object-cover rounded-full h-20 w-20 "
          />
          <p>
            <Rating value={4} />
          </p>
        </div>
        <div class="w-full mb-8">

          <div class="text-6xl text-indigo-100 text-left leading-tight h-8">
            “
          </div>
          <p class="text-base text-purple-50 dark:text-gray-100 text-center px-5">
            To get social media testimonials like these, keep your customers
            engaged with your social media accounts by posting regularly
            yourself
          </p>
          <div class="text-6xl text-indigo-100 text-right leading-tight h-8 -mt-3">
            ”
          </div>
        </div>
        <div class="w-full">
          <p class="text-md text-white font-bold text-center">Tom Hardy</p>
          <p class="text-xs text-indigo-100 dark:text-gray-300 text-center">
            @thom.hardy
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
