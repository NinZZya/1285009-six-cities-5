import React from 'react';
import Review from './components/review/review';
import * as Type from '../../constants/types';


const Reviews = ({reviews = []}) => {

  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <Review key={`review-${review.id}`} review={review} />
      ))}
    </ul>
  );
};

Reviews.propTypes = {
  reviews: Type.REVIEWS,
};


export default Reviews;
