import React, {Children} from 'react';
import * as Type from '../../types';
import {EMPTY_POSTFIX} from '../../const';


const PageContainer = (props) => {
  const {type, children, empty} = props;
  const pageClassName = `page__main--${type}`;

  return (
    <main
      className={`page__main ${pageClassName} ${empty ?
        `${pageClassName}${EMPTY_POSTFIX}` :
        ``
      }`}
    >
      {Children.map(children, ((child) => child))}
    </main>
  );
};

PageContainer.propTypes = {
  type: Type.PATH,
  children: Type.CHILDREN,
  empty: Type.EXACT,
};


export default PageContainer;
