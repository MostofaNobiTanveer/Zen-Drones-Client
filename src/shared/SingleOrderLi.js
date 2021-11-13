import React from "react";

const SingleOrderLi = ({ order, handleOrderDelete }) => {
  const { _id, status, name, email, address, orders } = order;
  return (
    <li className="bg-white">
      <div className="px-4 py-4 sm:px-6 hover:bg-bgBlack">
        <div className="flex items-center justify-between">

          <div className="flex gap-3 items-center">
            <div className="flex flex-col gap-0.5 text-sm">
              <p className="text-smalt-500 font-medium">{name}</p>
              <p className="text-xs text-gray-600">{email}</p>
              <p className="text-xs text-smalt-800 font-medium">{address}</p>
            </div>
            {orders.map((o) => {
              return (
                <div className="flex flex-col gap-0.5 text-sm p-2 bg-gray-50 rounded-md">
                  <p className="text-smalt-500 font-medium">{o.name}</p>
                  <p className="text-xs text-gray-800">Total: {o.totalPrice}</p>
                  <p className="text-xs text-smalt-800 font-medium">
                    Quantity: {o.quantity}
                  </p>
                </div>
              );
            })}
          </div>

          {/* action button */}
          <div className="flex-shrink-0 flex flex-col items-end justify-center gap-2">
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => handleOrderDelete(_id)}
                className="inline-flex text-xs leading-5 font-semibold text-smalt-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
            <div>
              <span className="uppercase bg-gray-100 inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-smalt-500 text-black">
                {status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default SingleOrderLi;
