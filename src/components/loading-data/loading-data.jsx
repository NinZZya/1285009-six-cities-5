import React from 'react';
import Loader from '../loader/loader';
import Message from '../message/message';
import * as Type from '../../types';
import {DataStatus} from '../../const';


const LoadingData = (props) => {
  const {status} = props;

  if (status === DataStatus.LOADING) {
    return <Loader />;
  }

  if (status === DataStatus.ERROR) {
    return (
      <Message
        error
        title="Error"
        text="Error loading data, try again later..."
      />
    );
  }

  return null;
};

LoadingData.propTypes = {
  status: Type.DATA_STATUS,
};


export default LoadingData;
