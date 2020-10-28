import React from 'react';
import renderer from 'react-test-renderer';
import BookmarkButton from './bookmark-button';


it(`Should BookmarkButton render correctly`, () => {
  const tree = renderer
    .create(
        <BookmarkButton />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
