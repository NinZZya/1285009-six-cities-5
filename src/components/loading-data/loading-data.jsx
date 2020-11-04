import React from 'react';
import Loader from '~/components/loader/loader';
import Message from '~/components/message/message';
import * as Type from '~/constants/types';
import {DataStatus} from '~/constants/const';


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
