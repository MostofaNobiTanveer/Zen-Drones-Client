import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="grid md:grid-cols-5 grid-cols-2 min-h-screen">
      <div className="hidden md:flex col-span-2 bg-gradient-to-br from-blue-300 to-red-200">
        <div className="flex flex-col justify-start items-start py-10 mx-auto max-w-md">
          <Link to="/">
            <svg className="h-24 w-24 -ml-2" viewBox="0 0 20 20" fill="white">
              <g>
                <path d="M 7.441406 7.503906 C 6.789062 8.164062 6.171875 8.785156 6.070312 8.890625 L 5.882812 9.082031 L 8.613281 9.082031 L 9.972656 7.707031 C 10.71875 6.953125 11.332031 6.332031 11.328125 6.332031 C 11.328125 6.332031 10.789062 6.328125 10.128906 6.320312 C 9.46875 6.316406 8.859375 6.3125 8.777344 6.308594 L 8.625 6.308594 Z M 7.441406 7.503906 " />
                <path d="M 8.644531 9.988281 L 5.003906 13.667969 L 5.035156 13.667969 C 5.054688 13.667969 5.664062 13.671875 6.390625 13.679688 L 7.707031 13.6875 L 7.832031 13.566406 C 8.125 13.273438 14.992188 6.332031 14.992188 6.332031 C 14.992188 6.332031 14.449219 6.328125 13.789062 6.320312 C 13.132812 6.316406 12.523438 6.3125 12.4375 6.308594 L 12.289062 6.308594 Z M 8.644531 9.988281 " />
                <path d="M 10.023438 12.292969 L 8.664062 13.667969 L 8.699219 13.667969 C 8.71875 13.667969 9.324219 13.671875 10.050781 13.679688 L 11.371094 13.6875 L 11.496094 13.566406 C 11.648438 13.410156 14.042969 10.988281 14.082031 10.949219 L 14.113281 10.917969 L 11.382812 10.917969 Z M 10.023438 12.292969 " />
              </g>
            </svg>
          </Link>
          <h1 className="text-white font-bold text-xl tracking-wider pl-4">
            Discover the world's top <br /> drones and grab them.
          </h1>
          <Link
            to="explore-drones"
            className="text-blue-600 mt-6 font-medium text-lg tracking-wide underline pl-4"
          >
            Explore Drones
          </Link>
        </div>
      </div>
      <div className="bg-gray-50 col-span-5 md:col-span-3 flex flex-col">
        <div className="mt-8 mx-auto w-full max-w-lg">
          <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex-shrink-0 flex justify-center">
              <Link to="/">
                <svg
                  className="h-24 w-24 -ml-2"
                  viewBox="0 0 20 20"
                  fill="black"
                >
                  <g>
                    <path d="M 7.441406 7.503906 C 6.789062 8.164062 6.171875 8.785156 6.070312 8.890625 L 5.882812 9.082031 L 8.613281 9.082031 L 9.972656 7.707031 C 10.71875 6.953125 11.332031 6.332031 11.328125 6.332031 C 11.328125 6.332031 10.789062 6.328125 10.128906 6.320312 C 9.46875 6.316406 8.859375 6.3125 8.777344 6.308594 L 8.625 6.308594 Z M 7.441406 7.503906 " />
                    <path d="M 8.644531 9.988281 L 5.003906 13.667969 L 5.035156 13.667969 C 5.054688 13.667969 5.664062 13.671875 6.390625 13.679688 L 7.707031 13.6875 L 7.832031 13.566406 C 8.125 13.273438 14.992188 6.332031 14.992188 6.332031 C 14.992188 6.332031 14.449219 6.328125 13.789062 6.320312 C 13.132812 6.316406 12.523438 6.3125 12.4375 6.308594 L 12.289062 6.308594 Z M 8.644531 9.988281 " />
                    <path d="M 10.023438 12.292969 L 8.664062 13.667969 L 8.699219 13.667969 C 8.71875 13.667969 9.324219 13.671875 10.050781 13.679688 L 11.371094 13.6875 L 11.496094 13.566406 C 11.648438 13.410156 14.042969 10.988281 14.082031 10.949219 L 14.113281 10.917969 L 11.382812 10.917969 Z M 10.023438 12.292969 " />
                  </g>
                </svg>
              </Link>
            </div>
            <div>
              <div className="text-center">
                <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                  404 error
                </p>
                <h1 className="mt-2 text-5xl font-title tracking-wider font-extrabold text-gray-900 sm:text-6xl">
                  Page not found.
                </h1>
                <p className="mt-2 text-base text-gray-500">
                  Sorry, we couldn’t find the page you’re looking for.
                </p>
                <div className="mt-6">
                  <Link
                    to="/"
                    className="text-base font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Go back home<span aria-hidden="true"> &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
