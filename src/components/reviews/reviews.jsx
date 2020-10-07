import React from 'react';
import Review from './components/review/review';
import NewReview from './components/new-review/new-review';
import * as Type from '../../types';


const renderCount = (count) => {
  return (
    <>
      &middot; <span className="reviews__amount">{count}</span>
    </>
  );
};

const Reviews = ({reviews = []}) => {
  const count = reviews.length;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews {count ? renderCount(count) : null}
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <Review key={`review-${review.id}`} review={review} />
        ))}
      </ul>
      <NewReview />
    </section>
  );
};

Reviews.propTypes = {
  reviews: Type.REVIEWS,
};


export default Reviews;
