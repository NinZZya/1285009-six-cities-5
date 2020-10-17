import React from 'react';
import * as Type from '../../types';


const OfferPrice = (props) => {
  const {price, type} = props;

  return (
    <div className={`${type}__price`}>
      <b className={`${type}__price-value`}>&euro;{price}</b>
      <span className={`${type}__price-text`}>&nbsp;night</span>
    </div>
  );
};

OfferPrice.propTypes = {
  price: Type.OFFER_PRICE,
  type: Type.TYPE_NAME,
};


export default OfferPrice;
