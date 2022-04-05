import React from 'react';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
import useReviews from '../Hooks/useReviews';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    
    return (
        <div className='m-14 pt-10'>
            <h2 className='text-center text-4xl font-bold'>Customer Reviews</h2>
            <div className="grid gap-10 grid-cols-2 lg:grid-cols-3 mt-20">
            {
                reviews.map(review => <CustomerReviews
                key={review.id}
                review={review}
                ></CustomerReviews>)
            }
            </div>
        </div>
    );
};

export default Reviews;