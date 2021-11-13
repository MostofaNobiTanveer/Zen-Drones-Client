import React, { useState } from "react";
import { useProductContext } from "../../contexts/ProductProvider";
import Loading from "../../shared/Loading";

const Products = () => {
  const { loading, addProductsToDb } = useProductContext();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    weight: "",
    camera: "",
    flightTime: "",
    battery: "",
    image: "",
    description: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProductsToDb(formData);
    setFormData({
      name: "",
      price: "",
      weight: "",
      camera: "",
      flightTime: "",
      battery: "",
      image: "",
      description: "",
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
              Add a new product
            </span>
          </div>
        </div>
        <div className="pt-4 pb-12">
          {/* content */}
          <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
            <div className="grid grid-cols-6 gap-6">
              {/* product name */}
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
                  value={formData.name}
                  onChange={(e) => handleOnChange(e)}
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  className="bg-white mt-1 text-smalt-900 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              {/* product price */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-smalt-900"
                >
                  Price/$<span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  required
                  name="price"
                  value={formData.price}
                  onChange={(e) => handleOnChange(e)}
                  id="price"
                  className="bg-white mt-1 text-smalt-900 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              {/* Weight */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="weight"
                  className="block text-sm font-medium text-smalt-900"
                >
                  Weight/g<span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  required
                  name="weight"
                  value={formData.weight}
                  onChange={(e) => handleOnChange(e)}
                  id="weight"
                  className="bg-white mt-1 text-smalt-900 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              {/* Camera resolution */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="camera"
                  className="block text-sm font-medium text-smalt-900"
                >
                  Camera resolution/MP<span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  required
                  name="camera"
                  value={formData.camera}
                  onChange={(e) => handleOnChange(e)}
                  id="camera"
                  className="bg-white mt-1 text-smalt-900 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              {/* Flight time */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="flightTime"
                  className="block text-sm font-medium text-smalt-900"
                >
                  Flight time/minutes<span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  required
                  name="flightTime"
                  value={formData.flightTime}
                  onChange={(e) => handleOnChange(e)}
                  id="flightTime"
                  className="bg-white mt-1 text-smalt-900 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              {/* Battery */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="battery"
                  className="block text-sm font-medium text-smalt-900"
                >
                  Battery size/mAh<span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  required
                  name="battery"
                  value={formData.battery}
                  onChange={(e) => handleOnChange(e)}
                  id="battery"
                  className="bg-white mt-1 text-smalt-900 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              {/* image */}
              <div className="col-span-6">
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-smalt-900"
                >
                  Image Url<span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  required
                  name="image"
                  value={formData.image}
                  onChange={(e) => handleOnChange(e)}
                  id="image"
                  className="bg-white mt-1 text-smalt-900 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              {/* description */}
              <div className="col-span-6">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-smalt-900"
                >
                  Description
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  className="bg-white mt-1 text-smalt-900 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  name="description"
                  value={formData.description}
                  onChange={(e) => handleOnChange(e)}
                  id="description"
                  rows="5"
                  placeholder="Your opinion about us"
                ></textarea>
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
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Products;
