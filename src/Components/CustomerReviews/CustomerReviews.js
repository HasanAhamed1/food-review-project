import React from "react";
import { StarIcon } from "@heroicons/react/solid";


const CustomerReviews = (props) => {
  const { name, comment, img, userImg } = props.review;
  return (
    <div className="bg-slate-200 text-lg font-bold p-8">
      <img src={img} alt="" />
      <div className="pt-5">
        <p>
          Name: <span className="font-medium">{name}</span>
        </p>
        <p>
          Comment: <span className="font-medium">{comment}</span>
        </p>

        <p className="flex items-center">
          Ratings: <StarIcon className="w-4 h-4 text-red-600"></StarIcon>{" "}
          <StarIcon className="w-4 h-4 text-red-600"></StarIcon>{" "}
          <StarIcon className="w-4 h-4 text-red-600"></StarIcon>
        </p>
      </div>
      <div className="grid justify-items-center pt-5">
        <img className="rounded-full w-24 h-24" src={userImg} alt="" />
      </div>
    </div>
  );
};

export default CustomerReviews;
