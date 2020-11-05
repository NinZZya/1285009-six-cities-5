import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sort from './sort';
import {SortType} from '../../constants/const';


const ACTIVE_SORT = SortType.POPULAR;
const SORTS = Object.values(SortType);

configure({adapter: new Adapter()});

it(`Should Sort was clicked`, () => {
  const onSortClick = jest.fn();

  const wrapper = shallow(
      <Sort
        sorts={SORTS}
        activeSort={ACTIVE_SORT}
        isActive={false}
        onSortClick={onSortClick}
      />
  );

  const sortItem = wrapper.find(`.places__option`).at(1);
  sortItem.simulate(`click`);
  expect(onSortClick).toHaveBeenCalledTimes(1);
});
