import React, {PureComponent} from 'react';
import * as Type from '../../types';


class Sort extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
    };
  }

  _toggleSort() {
    const {isOpened} = this.state;
    this.setState({isOpened: !isOpened});
  }

  render() {
    const {
      activeSort,
      sorts = [],
      onSortClick = () => {},
    } = this.props;

    const {isOpened} = this.state;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span
          className="places__sorting-type"
          tabIndex="0"
          onClick={() => {
            this._toggleSort();
          }}
        >
          {activeSort}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul
          className={`places__options places__options--custom ${isOpened ?
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
                onSortClick(sort);
                this._toggleSort();
              }}
            >
              {sort}
            </li>
          ))}
        </ul>
      </form >
    );
  }
}

Sort.propTypes = {
  activeSort: Type.SORT,
  sorts: Type.SORTS,
  onSortClick: Type.FUNCTION,
};


export default Sort;
