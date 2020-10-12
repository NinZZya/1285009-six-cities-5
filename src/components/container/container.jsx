import React, {Children} from 'react';
import {string} from 'prop-types';
import * as Type from '../../types';
import {EMPTY_POSTFIX} from '../../const';


const Container = (props) => {
  const {type, children, empty} = props;

  const containerClassName = `${type}-container`;

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
  type: string,
  children: Type.CHILDREN,
  empty: Type.FLAG,
};


export default Container;
