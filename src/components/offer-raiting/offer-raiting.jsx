import React from 'react';
import * as Type from '../../types';
import {calcRatePercent} from '../../utils/utils';


const OfferRaiting = ({rate}) => {
  return (
    <div className="property__rating rating">
      <div className="property__stars rating__stars">
        <span style={{width: `${calcRatePercent(rate)}%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="property__rating-value rating__value">{rate}</span>
    </div>
  );
};

OfferRaiting.propTypes = {
  rate: Type.RATE,
};


export default OfferRaiting;
