import React, {Children} from 'react';
import * as Type from '@/constants/types';
import {EMPTY_POSTFIX} from '@/constants/const';


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
      {children ? Children.map(children, ((child) => child)) : null}
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
