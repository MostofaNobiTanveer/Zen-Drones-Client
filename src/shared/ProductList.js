import React from "react";
import ProductCard from "./ProductCard";

const drones = [
  {
    id: 1,
    name: "DJI Air 2S",
    price: 999,
    img: "https://i.ibb.co/nmG2TGQ/DJI-Air-2-S-2.png",
  },
  {
    id: 2,
    name: "DJI Air 2S",
    price: 999,
    img: "https://i.ibb.co/nmG2TGQ/DJI-Air-2-S-2.png",
  },
  {
    id: 3,
    name: "DJI Air 2S",
    price: 999,
    img: "https://i.ibb.co/nmG2TGQ/DJI-Air-2-S-2.png",
  },
  {
    id: 4,
    name: "DJI Air 2S",
    price: 999,
    img: "https://i.ibb.co/nmG2TGQ/DJI-Air-2-S-2.png",
  },
  {
    id: 5,
    name: "DJI Air 2S",
    price: 999,
    img: "https://i.ibb.co/nmG2TGQ/DJI-Air-2-S-2.png",
  },
];

const ProductList = ({ cardCount }) => {
  return (
    <section>
      {/* <div className="text-center bg-gray-50 mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight sm:text-5xl">
            are you <span className="text-indigo-600">HUNGRY?</span>
          </h1>
          <p className="mt-2 text-sm md:text-lg text-gray-500">
            Our yummiest dishes are looking for hungriest tummy!
          </p>
        </div> */}

      <div className="flex-1 overflow-hidden sm:divide-y-0 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {drones.slice(0, cardCount).map((drone) => (
          <ProductCard key={drone.id} {...drone} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
