import React from "react";
import { useOrderContext } from "../../contexts/OrderProvider";
import Loading from "../../shared/Loading";

const UserOrders = () => {
  const { myOrders, loading } = useOrderContext();

  if (loading) {
    return <Loading />;
  }
  
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">My Orders</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div>
          {/* <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div> */}
          {myOrders.map((order) => {
            return <li key={order._id}>{order.name}</li>;
          })}
        </div>
      </div>
    </div>
  );
};

export default UserOrders;
