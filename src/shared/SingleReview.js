import React from "react";
import Rating from "../utilities/Rating";

const SingleReview = ({ name, email, review, rating, photoURL }) => {
  return (
    <div className="flex items-center justify-center pt-5 pb-10">
      <div className="w-full mx-auto rounded-lg bg-gradient-to-br from-purple-400 to-indigo-400 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
        <div className="w-full pt-1 text-center pb-2 -mt-16 mx-auto">
          {photoURL ? (
            <img
              alt={name}
              src={photoURL}
              className="object-cover rounded-full h-20 w-20 "
            />
          ) : (
            <svg
              className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-green-300 rounded-full overflow-hidden"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )}
          <p>
            <Rating value={parseInt(rating)} />
          </p>
        </div>
        <div className="w-full mb-8">
          <div className="text-6xl text-indigo-100 text-left leading-tight h-8">
            “
          </div>
          <p className="text-base text-purple-50 dark:text-gray-100 text-center px-5">
            {review}
          </p>
          <div className="text-6xl text-indigo-100 text-right leading-tight h-8 -mt-3">
            ”
          </div>
        </div>
        <div className="w-full">
          <p className="text-md text-white font-bold text-center">{name}</p>
          <p className="text-xs text-indigo-100 dark:text-gray-300 text-center">
            {email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
