import React from 'react';
import * as Type from '../../types';


const Message = ({title = ``, text = ``}) => {
  return (
    <div className="container">
      {title ? <h2>{title}</h2> : null}
      {text ? <p>{text}</p> : null}
    </div>
  );
};

Message.propTypes = {
  title: Type.MESSAGE_TITLE,
  text: Type.MESSAGE_TEXT,
};


export default Message;
