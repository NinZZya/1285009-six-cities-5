import React from 'react';
import Review from './components/review';
import NewReview from './components/new-review';

const REVIEWS_COUNT = 1;

const Reviews = () => {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{REVIEWS_COUNT}</span>
      </h2>
      <ul className="reviews__list">
        {new Array(REVIEWS_COUNT).fill(``).map((_, index) => <Review key={`review-${index}`} />)}
      </ul>
      <NewReview />
    </section>
  );
};

export default Reviews;
