import React from 'react';
import * as Type from '~/constants/types';
import {calcRatePercent} from '~/utils/utils';


const RaitingStars = (props) => {
  const {rate, type} = props;

  return (
    <div className={`rating__stars ${type}`}>
      <span style={{width: `${calcRatePercent(rate)}%`}}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  );
};

RaitingStars.propTypes = {
  rate: Type.RATE,
  type: Type.TYPE_NAME,
};


export default RaitingStars;
