import React from 'react';

const OfferRaiting = () => {
  return (
    <div className="property__rating rating">
      <div className="property__stars rating__stars">
        <span style={{width: `80%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="property__rating-value rating__value">4.8</span>
    </div>
  );
};

export default OfferRaiting;
