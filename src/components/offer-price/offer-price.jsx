import React from 'react';
import * as Type from '../../types';


const OfferPrice = ({price}) => {
  return (
    <div className="property__price">
      <b className="property__price-value">&euro;{price}</b>
      <span className="property__price-text">&nbsp;night</span>
    </div>
  );
};

OfferPrice.propTypes = {
  price: Type.OFFER_PRICE,
};


export default OfferPrice;
