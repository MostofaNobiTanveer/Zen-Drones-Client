import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthProvider";

const dashboardLinks = [
  {
    id: 1,
    text: "Dashboard",
    svgPath: [
      "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    ],
    href: "",
    userAccess: true,
  },
  {
    id: 2,
    text: "My Profile",
    svgPath: [
      "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    ],
    href: "profile",
    userAccess: true,
  },
  {
    id: 3,
    text: "My Orders",
    svgPath: [
      "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z",
    ],
    href: "orders",
    userAccess: true,
  },
  {
    id: 4,
    text: "Review",
    svgPath: [
      "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z",
    ],
    href: "review",
    userAccess: true,
  },
  {
    id: 5,
    text: "Payment",
    svgPath: [
      "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
    ],
    href: "payment",
    userAccess: true,
  },
  {
    id: 6,
    text: "Products",
    svgPath: [
      "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
    ],
    href: "products",
    userAccess: false,
  },
  {
    id: 7,
    text: "Manage Orders",
    svgPath: [
      "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
      "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    ],
    href: "manage-orders",
    userAccess: false,
  },
  {
    id: 8,
    text: "Make Admin",
    svgPath: [
      "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z",
    ],
    href: "make-admin",
    userAccess: false,
  },
];

const Sidebar = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, userSignOut, admin } = useAuthContext();

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Off-canvas menu for mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 flex z-40 md:hidden">
          <div
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-gray-600 bg-opacity-75"
          ></div>
          <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
            <div className="absolute top-6 right-2">
              {/* close sidebar button */}
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none"
              >
                <svg
                  className="h-6 w-6 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <Link to="/" className="flex-shrink-0 flex items-center px-4">
              <svg className="h-12 w-12" viewBox="0 0 20 20" fill="black">
                <g>
                  <path d="M 7.441406 7.503906 C 6.789062 8.164062 6.171875 8.785156 6.070312 8.890625 L 5.882812 9.082031 L 8.613281 9.082031 L 9.972656 7.707031 C 10.71875 6.953125 11.332031 6.332031 11.328125 6.332031 C 11.328125 6.332031 10.789062 6.328125 10.128906 6.320312 C 9.46875 6.316406 8.859375 6.3125 8.777344 6.308594 L 8.625 6.308594 Z M 7.441406 7.503906 " />
                  <path d="M 8.644531 9.988281 L 5.003906 13.667969 L 5.035156 13.667969 C 5.054688 13.667969 5.664062 13.671875 6.390625 13.679688 L 7.707031 13.6875 L 7.832031 13.566406 C 8.125 13.273438 14.992188 6.332031 14.992188 6.332031 C 14.992188 6.332031 14.449219 6.328125 13.789062 6.320312 C 13.132812 6.316406 12.523438 6.3125 12.4375 6.308594 L 12.289062 6.308594 Z M 8.644531 9.988281 " />
                  <path d="M 10.023438 12.292969 L 8.664062 13.667969 L 8.699219 13.667969 C 8.71875 13.667969 9.324219 13.671875 10.050781 13.679688 L 11.371094 13.6875 L 11.496094 13.566406 C 11.648438 13.410156 14.042969 10.988281 14.082031 10.949219 L 14.113281 10.917969 L 11.382812 10.917969 Z M 10.023438 12.292969 " />
                </g>
              </svg>
              <h1 className="font-medium text-lg">ZEN Drones</h1>
            </Link>
            <div className="mt-5 flex-1 h-0 overflow-y-auto">
              {/* links mobile menu */}
              <nav className="px-2 space-y-1">
                {dashboardLinks
                  .filter((link) => (!admin ? link.userAccess : link))
                  .map(({ id, text, svgPath, href }) => {
                    return (
                      <NavLink
                        end
                        to={href}
                        key={id}
                        onClick={() => setIsSidebarOpen(false)}
                        className={({ isActive }) =>
                          isActive
                            ? "bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-base rounded-md"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base rounded-md"
                        }
                      >
                        <svg
                          className="mr-4 flex-shrink-0 h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          {svgPath?.map((d, index) => {
                            return (
                              <path
                                key={index}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1"
                                d={d}
                              />
                            );
                          })}
                        </svg>
                        {text}
                      </NavLink>
                    );
                  })}
              </nav>
            </div>
          </div>

          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* <!-- Dummy element to force sidebar to shrink to fit close icon --> */}
          </div>
        </div>
      )}

      {/* <!-- Static sidebar for desktop --> */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
            <Link to="/" className="flex items-center flex-shrink-0 px-4">
              <svg className="h-12 w-12" viewBox="0 0 20 20" fill="black">
                <g>
                  <path d="M 7.441406 7.503906 C 6.789062 8.164062 6.171875 8.785156 6.070312 8.890625 L 5.882812 9.082031 L 8.613281 9.082031 L 9.972656 7.707031 C 10.71875 6.953125 11.332031 6.332031 11.328125 6.332031 C 11.328125 6.332031 10.789062 6.328125 10.128906 6.320312 C 9.46875 6.316406 8.859375 6.3125 8.777344 6.308594 L 8.625 6.308594 Z M 7.441406 7.503906 " />
                  <path d="M 8.644531 9.988281 L 5.003906 13.667969 L 5.035156 13.667969 C 5.054688 13.667969 5.664062 13.671875 6.390625 13.679688 L 7.707031 13.6875 L 7.832031 13.566406 C 8.125 13.273438 14.992188 6.332031 14.992188 6.332031 C 14.992188 6.332031 14.449219 6.328125 13.789062 6.320312 C 13.132812 6.316406 12.523438 6.3125 12.4375 6.308594 L 12.289062 6.308594 Z M 8.644531 9.988281 " />
                  <path d="M 10.023438 12.292969 L 8.664062 13.667969 L 8.699219 13.667969 C 8.71875 13.667969 9.324219 13.671875 10.050781 13.679688 L 11.371094 13.6875 L 11.496094 13.566406 C 11.648438 13.410156 14.042969 10.988281 14.082031 10.949219 L 14.113281 10.917969 L 11.382812 10.917969 Z M 10.023438 12.292969 " />
                </g>
              </svg>
              <h1 className="font-medium text-xl">ZEN Drones</h1>
            </Link>
            <div className="mt-5 flex-grow flex flex-col">
              {/* desktop links */}
              <nav className="flex-1 px-2 bg-white space-y-1">
                {dashboardLinks
                  .filter((link) => (!admin ? link.userAccess : link))
                  .map(({ id, text, svgPath, href }) => {
                    return (
                      <NavLink
                        end
                        to={href}
                        key={id}
                        onClick={() => setIsSidebarOpen(false)}
                        className={({ isActive }) =>
                          isActive
                            ? "bg-gray-100 text-gray-800 group flex items-center px-2 py-2 text-base rounded-md"
                            : "text-gray-500 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base rounded-md"
                        }
                      >
                        <svg
                          className="mr-4 flex-shrink-0 h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          {svgPath?.map((d, index) => {
                            return (
                              <path
                                key={index}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1"
                                d={d}
                              />
                            );
                          })}
                        </svg>
                        {text}
                      </NavLink>
                    );
                  })}
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
          {/* open sidebar menu */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
          >
            <span className="sr-only">Open sidebar</span>
            {/* <!-- Heroicon name: outline/menu-alt-2 --> */}
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
          <div className="flex-1 px-4 flex items-center justify-between">
            <div className="flex-1 flex">
              <h1 className="flex flex-col text-xs text-gray-500 font-bold">
                Wellcome,{" "}
                <span className="text-blue-500 truncate text-base sm:text-lg font-medium capitalize">
                  {user.displayName}
                </span>
              </h1>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              {/* <!-- Profile dropdown --> */}
              <div className="ml-3 relative">
                <div>
                  <button
                    type="button"
                    className="bg-gradient-to-br from-indigo-500 to-green-300 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-500 focus:ring-white"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    {user.photoURL ? (
                      <img
                        className="w-9 h-9 rounded-full"
                        src={user.photoURL}
                        alt={user.displayName.split(" ").slice(-1).join(" ")}
                      />
                    ) : (
                      <svg
                        className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-green-300 rounded-full overflow-hidden"
                        fill="white"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    )}
                  </button>
                </div>
                {isDropdownOpen && (
                  <div className="origin-top-right z-40 absolute right-0 mt-2 w-52 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {user?.email && (
                      <div className="divide-y divide-gray-200">
                        <div className="p-3">
                          <div className="truncate text-sm font-medium leading-none text-gray-800">
                            {user.displayName}
                          </div>
                          <div className="truncate text-sm font-normal leading-none mt-1 text-gray-400">
                            {user.email}
                          </div>
                        </div>
                        <NavLink
                          to="/"
                          onClick={() => setIsDropdownOpen(false)}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1"
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                          </svg>
                          <span className="mt-0.5">Return Home</span>
                        </NavLink>
                        <button
                          onClick={() => {
                            setIsDropdownOpen(false);
                            userSignOut();
                          }}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
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
                              strokeWidth="1"
                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                          </svg>
                          Sign out
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Sidebar;
