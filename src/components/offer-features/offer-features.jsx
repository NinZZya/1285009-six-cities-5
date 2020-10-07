import React from 'react';
import * as Type from '../../types';


const OfferFeatures = ({type, bedroomsCount, adultsCount}) => {
  return (
    <ul className="property__features">
      <li className="property__feature property__feature--entire">
        {type}
      </li>
      <li className="property__feature property__feature--bedrooms">
        {`${bedroomsCount} Bedrooms`}
      </li>
      <li className="property__feature property__feature--adults">
        {`Max ${adultsCount} adults`}
      </li>
    </ul>
  );
};

OfferFeatures.propTypes = {
  type: Type.OFFER_TYPE,
  bedroomsCount: Type.OFFER_BEDROOMS_COUNT,
  adultsCount: Type.OFFER_ADULTS_COUNT,
};


export default OfferFeatures;
