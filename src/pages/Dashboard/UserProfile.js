import React from "react";
import { useAuthContext } from "../../contexts/AuthProvider";
import Loading from "../../shared/Loading";

const UserProfile = () => {
  const { user, isLoading } = useAuthContext();
  return (
    <div>
      {isLoading && <Loading />}
      <div className="h-32 w-full object-cover lg:h-48 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"></div>
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div class="flex">
            {user?.photoURL ? (
              <img
                class="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                src={user.photoURL}
                alt={user.displayName.split(" ").slice(-1).join(" ")}
              />
            ) : (
              <svg
                className="h-24 w-24 sm:w-32 sm:h-32 bg-gradient-to-br from-indigo-500 to-green-300 rounded-full overflow-hidden"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </div>
          <div class="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6">
            <div class="sm:hidden md:block flex-1">
              <h1 class="text-2xl font-bold text-gray-900 truncate">
                {user?.displayName}
              </h1>
              <p className="text-gray-500">{user.email}</p>
            </div>
          </div>
        </div>
        <div class="hidden mt-6 sm:block md:hidden min-w-0 flex-1">
          <h1 class="text-2xl font-bold text-gray-900 truncate">
            {user?.displayName}
          </h1>
          <p className="text-gray-500">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
