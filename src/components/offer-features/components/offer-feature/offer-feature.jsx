import React from 'react';
import * as Type from '../../../../constants/types';


const OfferFeatures = (props) => {
  const {type, value} = props;

  if (type) {
    return (
      <li className={`property__feature property__feature--${type}`}>
        {value}
      </li>
    );
  }

  return (
    <li className="property__feature">
      {value}
    </li>
  );
};

OfferFeatures.propTypes = {
  type: Type.OFFER_TYPE,
  value: Type.OFFER_FEATURE_VAUE,
};


export default OfferFeatures;
