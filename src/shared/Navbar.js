import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthProvider";

const links = [
  {
    id: 1,
    text: "Home",
    svgPath: [
      "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    ],
    href: "/",
  },
  {
    id: 2,
    text: "Explore",
    svgPath: [
      "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
    ],
    href: "/explore-drones",
  },
  {
    id: 3,
    text: "Cart",
    svgPath: ["M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"],
    href: "/cart",
  },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, userSignOut } = useAuthContext();

  return (
    <nav className="bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 fixed w-full top-0 z-40">
      <div className="max-w-6xl mx-auto px-2 sm:px-6">
        <div className="relative flex items-center justify-between h-16">
          {/* <!-- Mobile menu button--> */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="transform transition-all inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </button>
            {/* Mobile menu */}
            {mobileMenuOpen && (
              <div className="sm:hidden origin-top-left z-40 absolute bottom-0 left-0 w-52 ">
                <div className="px-2 absolute w-full bg-white pt-2 pb-3 space-y-1 rounded-md shadow-lg">
                  {links.map(({ id, text, href, svgPath }) => {
                    return (
                      <NavLink
                        key={id}
                        to={href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={({ isActive }) =>
                          isActive
                            ? "bg-gray-100 transform transition-all hover:bg-gray-100 text-gray-900 px-3 py-2 rounded-md text-sm font-medium flex gap-2 items-center"
                            : "text-gray-400 transform transition-all hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium flex gap-2 items-center"
                        }
                      >
                        <svg
                          className="flex-shrink-0 h-6 w-6"
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
                </div>
              </div>
            )}
          </div>
          {/* logo */}
          <div className="flex-1 sm:flex-grow-0 flex items-center justify-center sm:items-stretch sm:justify-start">
            <Link to="/">
              <svg className="h-20 w-20" viewBox="0 0 20 20" fill="white">
                <g>
                  <path d="M 7.441406 7.503906 C 6.789062 8.164062 6.171875 8.785156 6.070312 8.890625 L 5.882812 9.082031 L 8.613281 9.082031 L 9.972656 7.707031 C 10.71875 6.953125 11.332031 6.332031 11.328125 6.332031 C 11.328125 6.332031 10.789062 6.328125 10.128906 6.320312 C 9.46875 6.316406 8.859375 6.3125 8.777344 6.308594 L 8.625 6.308594 Z M 7.441406 7.503906 " />
                  <path d="M 8.644531 9.988281 L 5.003906 13.667969 L 5.035156 13.667969 C 5.054688 13.667969 5.664062 13.671875 6.390625 13.679688 L 7.707031 13.6875 L 7.832031 13.566406 C 8.125 13.273438 14.992188 6.332031 14.992188 6.332031 C 14.992188 6.332031 14.449219 6.328125 13.789062 6.320312 C 13.132812 6.316406 12.523438 6.3125 12.4375 6.308594 L 12.289062 6.308594 Z M 8.644531 9.988281 " />
                  <path d="M 10.023438 12.292969 L 8.664062 13.667969 L 8.699219 13.667969 C 8.71875 13.667969 9.324219 13.671875 10.050781 13.679688 L 11.371094 13.6875 L 11.496094 13.566406 C 11.648438 13.410156 14.042969 10.988281 14.082031 10.949219 L 14.113281 10.917969 L 11.382812 10.917969 Z M 10.023438 12.292969 " />
                </g>
              </svg>
            </Link>
          </div>
          {/* links */}
          <div className="hidden sm:block sm:ml-6">
            <div className="flex sm:space-x-12">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-swamp-300 hover:bg-swamp-400 hover:text-white" --> */}
              {links.map(({ id, text, href }) => {
                return (
                  <NavLink
                    key={id}
                    to={href}
                    className={({ isActive }) =>
                      isActive
                        ? "text-white transform transition-all px-3 py-2 rounded-md text-base font-medium"
                        : "text-woodsmoke-100 transform transition-all hover:text-white px-3 py-2 rounded-md text-base font-medium"
                    }
                  >
                    {text}
                  </NavLink>
                );
              })}
            </div>
          </div>
          {/* profile */}
          <div className="flex absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="ml-3 relative">
              <div>
                <button
                  type="button"
                  className="flex text-sm rounded-full border-2 border-white focus:outline-none focus:ring-2 focus:ring-offset focus:ring-white"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {user.photoURL ? (
                    <img
                      className="h-8 w-8 sm:w-9 sm:h-9 rounded-full"
                      src={user.photoURL}
                      alt={user.displayName.split(" ").slice(-1).join(" ")}
                    />
                  ) : (
                    <svg
                      className="h-8 w-8 sm:w-9 sm:h-9 bg-transparent rounded-full overflow-hidden"
                      fill="#fff"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )}
                </button>
              </div>
              {/* <!-- Profile dropdown --> */}
              {dropdownOpen && (
                <div className="origin-top-right z-40 absolute right-0 mt-2 w-52 rounded-md shadow-lg py-1 bg-white">
                  {user?.email ? (
                    <div className="divide-y divide-gray-200">
                      <div className="p-4">
                        <div className="truncate text-sm leading-none text-gray-800">
                          {user.displayName}
                        </div>
                        <div className="truncate text-xs leading-none my-1 text-gray-400">
                          {user.email}
                        </div>
                      </div>
                      <NavLink
                        to="/dashboard"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
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
                        <span className="mt-0.5">Dashboard</span>
                      </NavLink>
                      <button
                        onClick={() => {
                          setDropdownOpen(false);
                          userSignOut();
                        }}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-50"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          />
                        </svg>
                        Sign out
                      </button>
                    </div>
                  ) : (
                    <div className="divide-y divide-gray-200">
                      <NavLink
                        to="/signup"
                        onClick={() => setDropdownOpen(false)}
                        className={({ isActive }) =>
                          isActive
                            ? "block px-4 py-2 text-sm text-gray-700 bg-gray-100"
                            : "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        }
                      >
                        Sign up
                      </NavLink>
                      <NavLink
                        to="/signin"
                        onClick={() => setDropdownOpen(false)}
                        className={({ isActive }) =>
                          isActive
                            ? "block px-4 py-2 text-sm text-gray-700 bg-gray-100"
                            : "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        }
                      >
                        Sign in
                      </NavLink>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
