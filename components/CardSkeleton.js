import React from "react";
import Skeleton from "react-loading-skeleton";

const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div className="HranaCard" key={i}>
        <Skeleton
          baseColor="#202020"
          highlightColor="#444"
          className="skeleton"
        />

        <Skeleton
          circle
          width={150}
          height={150}
          baseColor="#202020"
          highlightColor="#444"
          className="skeleton"
        />

        <Skeleton
          baseColor="#202020"
          highlightColor="#444"
          className="skeleton"
        />
        <Skeleton
          baseColor="#202020"
          highlightColor="#444"
          className="skeleton"
        />
      </div>
    ));
};

export default CardSkeleton;
