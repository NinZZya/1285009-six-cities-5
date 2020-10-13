import React, {Children} from 'react';
import * as Type from '../../types';
import {EMPTY_POSTFIX} from '../../const';


const Container = (props) => {
  const {children, empty, className} = props;

  const type = props.type ? `${props.type}-container` : ``;
  const containerClassName = className ? className : type;

  return (
    <div
      className={`container ${containerClassName} ${empty ?
        `${containerClassName}-${EMPTY_POSTFIX}` :
        ``
      }`}
    >
      {Children.map(children, ((child) => child))}
    </div>
  );
};

Container.propTypes = {
  type: Type.TYPE_NAME,
  children: Type.CHILDREN,
  empty: Type.FLAG,
  className: Type.CLASS_NAME,
};


export default Container;
