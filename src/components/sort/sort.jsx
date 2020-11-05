import React, {useState, useCallback} from 'react';
import * as Type from '../../constants/types';


const Sort = (props) => {
  const {
    activeSort,
    sorts = [],
    onSortClick = () => {},
  } = props;

  const [isActive, setIsActive] = useState(false);

  const onActiveChange = useCallback(() => {
    setIsActive(!isActive);
  });

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={onActiveChange}
      >
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${isActive ?
          `places__options--opened` :
          ``}`}
      >
        {sorts.map((sort, index) => (
          <li
            className={`places__option ${activeSort === sort ?
              `places__option--active` :
              ``}`}
            tabIndex="0"
            key={`sort-${index}`}
            onClick={() => {
              onActiveChange();
              onSortClick(sort);
            }}
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
  isActive: Type.FLAG,
  sorts: Type.SORTS,
  onSortClick: Type.FUNCTION,
};


export default Sort;
