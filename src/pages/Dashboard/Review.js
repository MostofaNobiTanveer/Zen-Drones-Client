import React, { useState } from "react";
import { useAppContext } from "../../contexts/AppProvider";
import { useAuthContext } from "../../contexts/AuthProvider";
import Loading from "../../shared/Loading";

const Review = () => {
  const { user } = useAuthContext();
  const { loading, addReviewToDb } = useAppContext();
  const [formData, setFormData] = useState({
    review: "",
    rating: "",
    name: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addReviewToDb(formData);
    setFormData({
      review: "",
      rating: "",
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
    });
  };
  
  return (
    <div className="py-6">
      {loading && <Loading />}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-start">
            <span className="pr-3 text-lg font-medium text-neutral-600 bg-gray-100">
              Leave us a review
            </span>
          </div>
        </div>
        <div className="pt-4 pb-12">
          {/* content */}
          <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
            <div className="grid grid-cols-6 gap-6">
              {/* user name */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-smalt-900"
                >
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  disabled
                  value={user.displayName}
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  className="bg-white mt-1 text-smalt-900 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              {/* user email */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-smalt-900"
                >
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  disabled
                  value={user.email}
                  id="email"
                  autoComplete="email"
                  className="bg-white mt-1 text-smalt-900 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              {/* Review */}
              <div className="col-span-6">
                <label
                  htmlFor="review"
                  className="block text-sm font-medium text-smalt-900"
                >
                  Your Review
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  className="bg-white mt-1 text-smalt-900 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  name="review"
                  value={formData.review}
                  onChange={(e) => handleOnChange(e)}
                  id="review"
                  rows="3"
                  placeholder="Your opinion about us"
                ></textarea>
              </div>
              {/* Rating */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="rating"
                  className="block text-sm font-medium text-smalt-900"
                >
                  Rating<span className="text-red-500">*</span>
                </label>
                <select
                  required
                  id="rating"
                  value={formData.rating}
                  onChange={(e) => handleOnChange(e)}
                  name="rating"
                  className="bg-white mt-1 text-smalt-900 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select Rating</option>
                  {Array.from(Array(5).keys()).map((item, index) => (
                    <option value={item + 1} key={index}>
                      {item + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* submit */}
            <div className="pt-6">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <svg
                  className="-ml-1 mr-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
                Send Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
