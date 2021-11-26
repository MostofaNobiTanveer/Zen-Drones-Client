import React, { useState } from "react";
import { useAuthContext } from "../contexts/AuthProvider";
import { useOrderContext } from "../contexts/OrderProvider";
import Loading from "./Loading";

const SingleOrderLi = ({ order }) => {
  const [orderStatus, setOrderStatus] = useState({ status: "" });
  const { admin } = useAuthContext();
  const { handleOrderStatus, handleOrderDelete, loading } = useOrderContext();

  const handleSubmit = (e, id) => {
    e.preventDefault();
    handleOrderStatus(id, orderStatus);
  };

  if (loading) {
    return <Loading />;
  }

  const { _id, status, name, email, address, orders } = order;
  return (
    <li className="bg-white">
      <div className="px-4 py-4 sm:px-6 hover:bg-bgBlack">
        <div className="flex flex-col gap-3 lg:flex-row items-start justify-between">
          <div className="flex flex-col gap-3 items-start">
            <div className="flex flex-col gap-0.5 text-sm">
              <p className="text-smalt-500 font-medium">{name}</p>
              <p className="text-xs text-gray-600">{email}</p>
              <p className="text-xs text-smalt-800 font-medium">{address}</p>
            </div>
            <div className="flex gap-2">
              {orders.map((o) => {
                return (
                  <div className="flex flex-col gap-0.5 text-sm p-2 bg-gray-50 rounded-md">
                    <p className="text-smalt-500 font-medium">{o.name}</p>
                    <p className="text-xs text-gray-800">
                      Total: {o.totalPrice}
                    </p>
                    <p className="text-xs text-smalt-800 font-medium">
                      Quantity: {o.quantity}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* action button */}
          <div className="flex flex-col lg:items-end items-start gap-3">
            <div className="flex gap-3">
              <div>
                <span className="uppercase bg-gray-100 inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-smalt-500 text-black">
                  {status}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleOrderDelete(_id)}
                  className="inline-flex leading-5 font-semibold text-gray-900"
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
            </div>
            {/* status */}
            {admin && (
              <div className="flex-1 justify-self-end">
                <form
                  onSubmit={(e) => handleSubmit(e, _id)}
                  className="flex-1 w-full gap-2 flex items-center justify-between"
                >
                  <select
                    required
                    id="parcel_status"
                    value={orderStatus.status}
                    onChange={(e) => setOrderStatus({ status: e.target.value })}
                    name="parcel_status"
                    className="bg-gray-50 flex-1 text-xs text-gray-900 block pr-6 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">Status</option>
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="shipped">Shipped</option>
                    <option value="completed">Completed</option>
                    <option value="cancles">Cancled</option>
                  </select>
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-xs font-normal text-indigo-500 bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Update
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default SingleOrderLi;
