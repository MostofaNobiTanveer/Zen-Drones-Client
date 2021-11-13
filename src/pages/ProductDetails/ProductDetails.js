import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../shared/Footer";
import Loading from "../../shared/Loading";
import Navbar from "../../shared/Navbar";
import ScrollToTop from "../../utilities/ScrollToTop";

const ProductDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});

  useEffect(() => {
    setLoading(true);
    fetch(`https://intense-fortress-85211.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      <ScrollToTop />
      {loading && <Loading />}
      <Navbar />
      {/* content */}
      <section className="overflow-hidden bg-gradient-to-br from-blue-400 to-red-200">
        <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-0">
          <div className="w-96 -mb-20">
            <img
              className="w-full h-full object-cover object-center"
              src={product.image}
              alt="Feature Drone"
            />
          </div>
          <div className="inline-block text-center font-title tracking-wide uppercase font-extrabold text-gray-100 text-7xl sm:text-8xl">
            <h1>{product.name}</h1>
          </div>
        </div>
      </section>
      {/* Specs */}
      <section className="lg:py-6 lg:px-6">
        <div className="bg-white w-full max-w-6xl mx-auto shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-3xl tracking-wide font-title leading-6 font-medium text-gray-700">
              {product.name} Specs
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-md font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {product.name}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-md font-medium text-gray-500">
                  Takeoff Weight
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {product.weight} g
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-md font-medium text-gray-500">
                  Camera resolution
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {product.camera}MP
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-md font-medium text-gray-500">Flight time</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {product.flightTime} minutes
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-md font-medium text-gray-500">
                  Battery capacity
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {product.battery} mAh
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-md font-medium text-gray-500">Little About</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {product.description}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-md font-medium text-gray-500">
                  Best available price
                </dt>
                <dd className="mt-1 text-3xl text-gray-900 sm:mt-0 sm:col-span-2">
                  ${product.price}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:px-6 flex">
                <button
                  type="submit"
                  className="inline-flex w-full md:w-max justify-center items-center px-20 py-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
                  Add To Cart
                </button>
              </div>
            </dl>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetails;
