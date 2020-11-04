import React from 'react';
import renderer from 'react-test-renderer';
import Sort from './sort';
import {SortType} from '~/constants/const';


const testing = () => {};
const ACTIVE_SORT = SortType.POPULAR;
const SORTS = Object.values(SortType);

describe(`Should Sort render correctly`, () => {
  it(`Should Sort render correctly with opened sort list`, () => {
    const tree = renderer
      .create(
          <Sort
            sorts={SORTS}
            activeSort={ACTIVE_SORT}
            isActive={false}
            onActiveChange={testing}
            onSortClick={testing}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Sort render correctly with closed sort list`, () => {
    const tree = renderer
      .create(
          <Sort
            sorts={SORTS}
            activeSort={ACTIVE_SORT}
            isActive={false}
            onActiveChange={testing}
            onSortClick={testing}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
