import React from "react";
import { useAuthContext } from "../../contexts/AuthProvider";
import Rating from "../../utilities/Rating";

const Testimonials = () => {
  const { user } = useAuthContext();
  return (
    <div className="py-20">
      <div className="bg-white relative w-full max-w-sm ml-6 rounded-lg py-4 px-6 mb-6 shadow sm:inline-block">
        <div className="flex flex-col items-start">
          <div className="absolute">
            <img
              alt="profil"
              src={user.photoURL}
              className="mx-auto object-cover object-center rounded-full h-16 w-16 transform -translate-y-10"
            />
          </div>
          <div className="mt-8">
            <p className="flex flex-col items-baseline">
              <span className="text-gray-900 text-base font-medium">
                {user.displayName}
              </span>
              <span className="text-gray-500 text-sm">
                {user.email}
              </span>
            </p>
            {/* Rating stars */}
            <div className="flex items-center mt-1">
              <Rating value={2.5} />
            </div>
            <div className="mt-3">
              <p className="mt-1 text-sm">
                My first job of scanning photos at the Memories 2 Digital Photo
                Scanning was fantastic. She completed the work quickly while I
                was waiting. Thanks for a great service..She completed the work
                quickly while I was waiting. Thanks for a great service..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
