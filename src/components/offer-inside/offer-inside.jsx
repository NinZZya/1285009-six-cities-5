import React from 'react';
import * as Type from '~/constants/types';


const renderFeatures = (features) => {
  return (
    <>
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {features.map((feature, index) => {
          return (
            <li className="property__inside-item" key={`iside-item-${index}`}>
              {feature}
            </li>
          );
        })}
      </ul>
    </>
  );
};

const OfferInside = ({features = []}) => {
  return (
    <div className="property__inside">
      {features ? renderFeatures(features) : null}
    </div>
  );
};

OfferInside.propTypes = {
  features: Type.OFFER_FEATURES,
};


export default OfferInside;
