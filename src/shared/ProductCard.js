import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ id, name, img, price }) => {
  const handleMouseMove = (e) => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;

    e.target.style.setProperty("--x", x + "px");
    e.target.style.setProperty("--y", y + "px");
  };

  return (
    <Link
      to={`drone/${id}`}
      onMouseMove={(e) => handleMouseMove(e)}
      title={name}
      className="product_card overflow-hidden relative p-6 group focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
    >
      <div className="flex flex-col h-full">
        <div className="block mx-auto h-64 w-64 overflow-hidden">
          <img
            className="w-full h-full object-cover object-center"
            src={img}
            alt={name}
          />
        </div>
        <div className="truncate mt-6 text-center lg:text-left">
          <p className="text-xl text-black font-medium">{name}</p>
          <p className="mt-2 text-xl font-semibold text-indigo-600">${price}</p>
        </div>
      </div>
      {/* <p className="absolute top-3 left-3 text-xs uppercase font-semibold text-indigo-500 bg-indigo-100 inline-block rounded px-2 py-1">
        Drone
      </p> */}
      <span className="pointer-events-none absolute top-4 right-6 sm:right-4 text-gray-400">
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
        </svg>
      </span>
    </Link>
  );
};

export default ProductCard;
