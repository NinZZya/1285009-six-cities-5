import React from 'react';
import * as Type from '../../types';


const Sort = (props) => {
  const {activeSort, sorts = []} = props;
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {sorts.map((sort, index) => (
          <li
            className={`places__option ${
              activeSort === sort ? `places__option--active` : ``
            }`}
            tabIndex="0"
            key={`sort-${index}`}
          >
            {sort}
          </li>
        ))}
      </ul>
    </form >
  );
};

Sort.propTypes = {
  activeSort: Type.SORT,
  sorts: Type.SORTS,
};


export default Sort;
