import React from "react";
import { useAppContext } from "../contexts/AppProvider";
import Loading from "./Loading";
import SingleReview from "./SingleReview";

const ReviewList = ({ reviewCount }) => {
  const { reviews, loading } = useAppContext();

  if (loading) {
    return <Loading />;
  }
  return (
    <section>
      <div className="px-3 container pt-20 mx-auto">
        <div className="grid lg:grid-cols-2 gap-4 max-w-6xl mx-auto">
          {reviews
            .slice()
            .reverse()
            .slice(0, reviewCount)
            .map((review, index) => (
              <SingleReview key={index} {...review} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewList;
