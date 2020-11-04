import React from 'react';
import * as Type from '@/constants/types';
import {extend} from '@/utils/utils';

const containerStyle = {
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
  justifyContent: `flex-start`,
  width: `100%`,
  margin: `20px`,
  padding: `20px`,
  textAlign: `center`,
};

const errorColor = {
  color: `#ff0000`,
};

const titleStyle = {
  fontSize: `24px`,
  lineHeight: 1.1667,
  fontWeight: 700,
  fontStyle: `oblique`,
};


const Message = (props) => {
  const {title, text, error} = props;

  const containerStyleByType = error ? extend(containerStyle, errorColor) : containerStyle;

  return (
    <div style={containerStyleByType}>
      <h2 style={titleStyle}>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

Message.propTypes = {
  title: Type.MESSAGE_TITLE,
  text: Type.MESSAGE_TEXT,
  error: Type.FLAG,
};


export default Message;
