import React from "react";
import { Link } from "react-router-dom";
import { useOrderContext } from "../../contexts/OrderProvider";
import Loading from "../../shared/Loading";
import SingleOrderLi from "../../shared/SingleOrderLi";

const ManageOrders = () => {
  const { loading, orders, handleOrderDelete } = useOrderContext();
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">All Orders</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="py-8">
          {orders.length < 1 ? (
            <Link
              to="/drones"
              className="w-full flex flex-col justify-center items-center border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20"
                viewBox="0 0 19 17"
                strokeWidth="1"
                version="1.1"
              >
                <g style={{ fill: "#222" }}>
                  <path d="M 0.160156 0.00390625 C 0.101562 0.0078125 0.0625 0.0195312 0.0507812 0.03125 C 0.0429688 0.0390625 0.046875 0.0546875 0.0585938 0.0664062 C 0.179688 0.183594 1.328125 0.476562 3.167969 0.859375 C 4.625 1.164062 6.265625 1.46875 7.378906 1.648438 C 7.953125 1.738281 8.378906 1.792969 8.660156 1.808594 C 8.746094 1.816406 8.75 1.816406 8.746094 1.824219 C 8.738281 1.859375 8.726562 1.945312 8.714844 2.035156 C 8.710938 2.089844 8.703125 2.210938 8.707031 2.214844 C 8.707031 2.214844 8.726562 2.210938 8.75 2.207031 C 8.882812 2.175781 8.972656 2.164062 9.097656 2.164062 C 9.234375 2.160156 9.328125 2.171875 9.453125 2.203125 C 9.621094 2.246094 9.792969 2.324219 9.953125 2.425781 C 9.96875 2.4375 9.984375 2.445312 9.984375 2.445312 C 9.988281 2.4375 10.03125 2.273438 10.042969 2.210938 C 10.054688 2.15625 10.070312 2.050781 10.070312 2.027344 C 10.070312 2.027344 10.078125 2.027344 10.09375 2.03125 C 10.351562 2.117188 10.761719 2.207031 11.410156 2.328125 C 12.902344 2.597656 15.507812 2.972656 17.183594 3.152344 C 18.234375 3.265625 18.839844 3.300781 18.941406 3.246094 C 18.953125 3.242188 18.953125 3.238281 18.953125 3.226562 C 18.949219 3.210938 18.949219 3.210938 18.933594 3.199219 C 18.832031 3.117188 18.3125 2.96875 17.429688 2.757812 C 15.71875 2.359375 12.859375 1.804688 11.363281 1.582031 C 10.796875 1.496094 10.457031 1.460938 10.203125 1.457031 L 10.089844 1.453125 L 10.085938 1.414062 C 10.066406 1.203125 10.011719 1 9.941406 0.859375 C 9.863281 0.710938 9.765625 0.617188 9.648438 0.585938 C 9.625 0.578125 9.617188 0.578125 9.566406 0.578125 C 9.515625 0.578125 9.507812 0.578125 9.480469 0.585938 C 9.460938 0.589844 9.4375 0.601562 9.421875 0.609375 C 9.246094 0.683594 9.066406 0.898438 8.9375 1.191406 C 8.925781 1.214844 8.917969 1.238281 8.917969 1.238281 C 8.917969 1.238281 8.902344 1.234375 8.886719 1.230469 C 8.546875 1.117188 7.878906 0.984375 6.695312 0.789062 C 5.246094 0.550781 3.347656 0.285156 2.023438 0.136719 C 1.347656 0.0625 0.875 0.0195312 0.511719 0.00390625 C 0.429688 0 0.199219 0 0.160156 0.00390625 Z M 0.160156 0.00390625 " />
                  <path d="M 9.003906 2.425781 C 8.675781 2.445312 8.351562 2.578125 8.066406 2.808594 C 7.964844 2.890625 7.851562 3.003906 7.761719 3.113281 C 7.527344 3.40625 7.355469 3.769531 7.265625 4.164062 C 7.261719 4.195312 7.253906 4.21875 7.253906 4.21875 C 7.253906 4.21875 7.222656 4.21875 7.1875 4.214844 C 6.699219 4.1875 6.246094 4.195312 5.847656 4.246094 C 4.964844 4.355469 4.246094 4.671875 3.667969 5.195312 C 3.613281 5.25 3.464844 5.398438 3.414062 5.460938 C 3.171875 5.742188 2.980469 6.035156 2.800781 6.40625 C 2.503906 7.023438 2.296875 7.746094 2.136719 8.738281 C 2.105469 8.933594 2.082031 9.105469 2.085938 9.105469 C 2.085938 9.109375 2.367188 8.914062 2.710938 8.675781 C 3.054688 8.4375 3.335938 8.242188 3.335938 8.242188 C 3.339844 8.242188 3.546875 8.515625 3.796875 8.855469 C 4.050781 9.191406 4.257812 9.46875 4.257812 9.46875 C 4.261719 9.472656 4.265625 9.460938 4.277344 9.371094 C 4.429688 8.386719 4.648438 7.664062 4.941406 7.15625 C 5.015625 7.027344 5.121094 6.878906 5.210938 6.773438 C 5.246094 6.734375 5.332031 6.644531 5.375 6.605469 C 5.722656 6.285156 6.152344 6.097656 6.699219 6.035156 C 6.855469 6.019531 6.96875 6.011719 7.164062 6.011719 C 7.367188 6.011719 7.523438 6.019531 7.742188 6.039062 C 8.066406 6.070312 8.503906 6.125 8.828125 6.183594 C 9.550781 6.3125 10.0625 6.492188 10.457031 6.757812 C 10.890625 7.046875 11.1875 7.453125 11.339844 7.96875 C 11.421875 8.246094 11.464844 8.535156 11.488281 8.9375 C 11.492188 9.035156 11.496094 9.382812 11.492188 9.511719 C 11.480469 9.855469 11.453125 10.230469 11.40625 10.601562 L 11.398438 10.664062 L 11.40625 10.671875 C 11.433594 10.699219 12.34375 11.585938 12.34375 11.585938 C 12.347656 11.589844 13.574219 11.035156 13.578125 11.027344 C 13.585938 11.023438 13.640625 10.523438 13.660156 10.324219 C 13.699219 9.886719 13.710938 9.589844 13.710938 9.210938 C 13.710938 9 13.710938 8.898438 13.703125 8.742188 C 13.644531 7.648438 13.367188 6.800781 12.871094 6.175781 C 12.578125 5.808594 12.21875 5.503906 11.773438 5.253906 C 11.5 5.097656 11.195312 4.964844 10.847656 4.84375 C 10.742188 4.808594 10.734375 4.804688 10.738281 4.800781 C 10.738281 4.789062 10.746094 4.695312 10.75 4.640625 C 10.753906 4.574219 10.753906 4.390625 10.75 4.324219 C 10.710938 3.691406 10.460938 3.140625 10.054688 2.789062 C 9.804688 2.574219 9.503906 2.449219 9.179688 2.425781 C 9.136719 2.421875 9.046875 2.421875 9.003906 2.425781 Z M 9.003906 2.425781 " />
                  <path d="M 2.613281 9.371094 C 2.277344 9.609375 1.996094 9.804688 1.996094 9.804688 C 1.992188 9.808594 1.96875 9.945312 1.9375 10.214844 C 1.824219 11.0625 1.789062 11.542969 1.792969 12.097656 C 1.796875 12.339844 1.800781 12.433594 1.816406 12.636719 C 1.898438 13.628906 2.1875 14.433594 2.6875 15.054688 C 2.8125 15.207031 2.976562 15.375 3.128906 15.503906 C 3.699219 15.996094 4.460938 16.347656 5.453125 16.574219 C 5.894531 16.675781 6.273438 16.738281 7.222656 16.867188 C 7.714844 16.933594 8.070312 16.96875 8.464844 16.992188 C 8.585938 17 9.054688 17.003906 9.179688 16.996094 C 10.289062 16.949219 11.144531 16.648438 11.789062 16.070312 C 12.238281 15.664062 12.605469 15.097656 12.882812 14.375 C 13.148438 13.691406 13.335938 12.882812 13.472656 11.851562 C 13.480469 11.792969 13.488281 11.742188 13.488281 11.738281 C 13.488281 11.730469 13.488281 11.726562 13.488281 11.726562 C 13.484375 11.726562 13.207031 11.855469 12.871094 12.007812 L 12.257812 12.289062 L 11.785156 11.828125 C 11.527344 11.574219 11.316406 11.363281 11.316406 11.363281 C 11.3125 11.363281 11.3125 11.371094 11.300781 11.445312 C 11.292969 11.53125 11.261719 11.722656 11.242188 11.839844 C 11.054688 13.015625 10.765625 13.839844 10.359375 14.351562 C 10.109375 14.664062 9.777344 14.898438 9.398438 15.03125 C 8.972656 15.179688 8.484375 15.222656 7.816406 15.164062 C 7.433594 15.128906 6.820312 15.042969 6.457031 14.972656 C 5.78125 14.839844 5.3125 14.648438 4.945312 14.363281 C 4.628906 14.113281 4.386719 13.773438 4.238281 13.363281 C 4.007812 12.71875 3.96875 11.792969 4.117188 10.535156 C 4.136719 10.390625 4.140625 10.375 4.160156 10.273438 C 4.164062 10.242188 4.171875 10.210938 4.167969 10.210938 C 4.164062 10.199219 3.234375 8.945312 3.234375 8.945312 C 3.230469 8.945312 2.953125 9.136719 2.613281 9.371094 Z M 2.613281 9.371094 " />
                </g>
              </svg>
              <span className="mt-2 block text-sm font-medium text-gray-500">
                Your Order List is empty
              </span>
              <span className="mt-2 block text-lg font-medium text-gray-900">
                Explore Our Drones
              </span>
            </Link>
          ) : (
            <ul className="divide-y bg-smalt-50 divide-smalt-200 rounded-md overflow-hidden">
              {orders.map((order) => {
                return (
                  <SingleOrderLi
                    handleOrderDelete={handleOrderDelete}
                    key={order._id}
                    order={order}
                  />
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;
