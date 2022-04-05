import React from "react";
import { useNavigate } from "react-router-dom";
import CustomerReviews from "../CustomerReviews/CustomerReviews";
import useReviews from "../Hooks/useReviews";
import pic from "../Images/275438587_522081222701484_6335111208831135567_n.jpg"

const Home = () => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useReviews();
  return (
    <div>
      <div className="grid grid-cols-2 justify-items-center m-16">
        <div className="ml-20 pt-20">
          <h1 className="text-6xl font-bold">
            <span className="text-red-500">Best Food</span> In Town
          </h1>
          <p className="py-5">
            Are you looking for the best food in town? Then, here we are! The
            best food reviews for you. Which will help you to find the best food
            or the best restaurant. Our blogers will tell you, where and how you
            find the best food. For more info click the live demo...
          </p>
          <button className="w-36 h-14 border rounded-lg text-center text-red-600 bg-red-50">
            Live Demo
          </button>
        </div>
        <div>
          <img className="h-96 w-80" src={pic} alt="" />
        </div>
      </div>
      <div className="m-14 pt-10">
        <div className="text-center text-4xl font-bold">
          <h2>Customer Reviews</h2>
        </div>
        <div className="grid gap-10 grid-cols-2 lg:grid-cols-3 mt-20">
          {reviews.slice(0, 3).map((review) => (
            <CustomerReviews key={review.id} review={review}></CustomerReviews>
          ))}
        </div>
        <div>
          <button
            className="mt-5 w-36 h-14 border rounded-lg text-center text-red-600 bg-red-50"
            onClick={() => navigate("/reviews")}
          >
            See Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
