import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthProvider";
import Loading from "../../../shared/Loading";

const Signin = () => {
  const [loginData, setLoginData] = useState({});
  const { state } = useLocation();
  const navigate = useNavigate();
  const { isLoading, signInWithGoogle, signinUser, handleForgotPassword } =
    useAuthContext();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signinUser(loginData.email, loginData.password, state, navigate);
  };

  return (
    <>
      <section className="grid lg:grid-cols-5 grid-cols-2 min-h-screen">
        <div className="hidden lg:flex col-span-2 bg-gradient-to-br from-yellow-300 to-red-200">
          <div className="flex flex-col justify-start items-start py-10 pl-16">
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
          </div>
        </div>
        <div className="bg-gray-50 col-span-3 flex flex-col">
          <div className="mt-8 mx-auto w-full max-w-md">
            <div className="flex flex-col justify-start items-start mb-10">
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
              <h1 className="text-gray-900 font-bold text-3xl font-title tracking-wider pl-4">
                Sign in to Zen Drones
              </h1>
            </div>
            <div className="rounded-lg px-4">
              {isLoading && <Loading />}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg text-gray-900"
                  >
                    Email address<span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      onChange={handleOnChange}
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none bg-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-lg text-gray-900"
                  >
                    Password<span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      onChange={handleOnChange}
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none bg-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    {isLoading ? "Loading..." : "Sign in"}
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <button
                      onClick={() => handleForgotPassword(loginData.email)}
                      className="font-medium text-indigo-500 hover:text-indigo-600"
                    >
                      Forgot your password?
                    </button>
                  </div>
                </div>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-gray-50 text-gray-900 font-medium">
                      Or
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <div>
                    <button
                      onClick={() => signInWithGoogle(state, navigate)}
                      className="w-full inline-flex justify-center items-center py-2 px-4 rounded-md shadow-sm bg-indigo-500 text-sm font-medium text-white hover:bg-indigo-600"
                    >
                      <span className="sr-only">Sign in with Google</span>
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 30 30"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M 15.003906 3 C 8.375 3 3 8.371094 3 15 C 3 21.628906 8.375 27 15.003906 27 C 25.015625 27 27.269531 17.707031 26.332031 13 L 15 13 L 15 17 L 22.738281 17 C 21.847656 20.449219 18.726562 23 15 23 C 10.582031 23 7 19.417969 7 15 C 7 10.582031 10.582031 7 15 7 C 17.007812 7 18.839844 7.746094 20.246094 8.96875 L 23.085938 6.128906 C 20.953125 4.183594 18.117188 3 15.003906 3 Z M 15.003906 3"
                          clipRule="evenodd"
                        />
                      </svg>
                      &nbsp;Sign in with Google
                    </button>
                  </div>
                </div>
                <p className="mt-6 text-center text-base font-medium text-gray-900">
                  New to Zen?
                  <Link
                    to="/signup"
                    className="text-indigo-500 hover:text-indigo-600 font-medium"
                  >
                    &nbsp;&nbsp;Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
