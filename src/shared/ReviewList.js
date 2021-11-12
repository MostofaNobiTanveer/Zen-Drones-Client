import React from "react";
import SingleReview from "./SingleReview";
const reviews = [1, 2, 3, 4];

const ReviewList = ({ reviewCount }) => {
  return (
    <section>
      <div class="container px-5 py-20 mx-auto">
        <div class="grid lg:grid-cols-2 gap-4 max-w-6xl mx-auto">
          {reviews.slice(0, reviewCount).map((review, index) => (
            <SingleReview key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewList;
