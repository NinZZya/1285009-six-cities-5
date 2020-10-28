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
      {children ? Children.map(children, ((child) => child)) : children}
    </main>
  );
};

PageContainer.propTypes = {
  type: Type.TYPE_NAME,
  children: Type.CHILDREN,
  empty: Type.EXACT,
};


export default PageContainer;
