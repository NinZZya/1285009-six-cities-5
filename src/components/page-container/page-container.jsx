import React, {Children} from 'react';
import * as Type from '../../types';
import {EMPTY_POSTFIX} from '../../const';


const PageContainerType = {
  MAIN: `MAIN`,
  FAVORITES: `FAVORITES`,
  LOGIN: `LOGIN`,
  OFFER: `OFFER`,
  PAGE_NOT_FOUND: `PAGE_NOT_FOUND`,
};

const Modificator = {
  [PageContainerType.MAIN]: `index`,
  [PageContainerType.FAVORITES]: `favorites`,
  [PageContainerType.LOGIN]: `login`,
  [PageContainerType.OFFER]: `property`,
  [PageContainerType.PAGE_NOT_FOUND]: `index`,
};

const PageContainer = (props) => {
  const {type, children, empty} = props;
  const pageClassName = `page__main--${Modificator[type]}`;

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
  type: Type.TYPE_NAME,
  children: Type.CHILDREN,
  empty: Type.EXACT,
};


export {PageContainerType};
export default PageContainer;
