import React from "react";
import { useProductContext } from "../../contexts/ProductProvider";
import Loading from "../../shared/Loading";

const Products = () => {
  const { loading, products, deleteProduct } = useProductContext();

  return (
    <section>
      {loading && <Loading />}
      <div className="flex-1 overflow-hidden divide-y-1 divide-gray-200  grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
        {products
          .slice()
          .reverse()
          .map(({ _id, name, image, price }) => (
            <div
              key={_id}
              className="product_card border-b shadow overflow-hidden relative p-4 group focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
            >
              <div className="flex flex-col h-full">
                <div className="block mx-auto h-40 w-40 overflow-hidden">
                  <img
                    className="product_img w-full h-full object-cover object-center"
                    src={image}
                    alt={name}
                  />
                </div>
                <div className="truncate text-center">
                  <p className="text-2xl text-black font-medium font-title tracking-wider">
                    {name}
                  </p>
                </div>
              </div>
              <button
                onClick={() => deleteProduct(_id)}
                className="absolute top-0 right-0 p-3 text-gray-500 font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Products;
