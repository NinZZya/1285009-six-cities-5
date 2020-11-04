import React, {Children} from 'react';
import * as Type from '@/constants/types';


const OfferFeatures = (props) => {
  const {children} = props;

  return (
    <ul className="property__features">
      {children ? Children.map(children, (child) => child) : null}
    </ul>
  );
};

OfferFeatures.propTypes = {
  children: Type.CHILDREN,
};


export default OfferFeatures;
