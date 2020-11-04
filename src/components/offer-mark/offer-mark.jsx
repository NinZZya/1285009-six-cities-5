import React from 'react';
import * as Type from '~/constants/types';


const OfferMark = (props) => {
  const {type} = props;

  return (
    <div className={`${type}__mark`}>
      <span>Premium</span>
    </div>
  );
};

OfferMark.propTypes = {
  type: Type.TYPE_NAME,
};


export default OfferMark;
