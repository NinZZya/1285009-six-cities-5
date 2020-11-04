import React from 'react';
import renderer from 'react-test-renderer';
import Review from './review';
import reviews from '~/mocks/reviews';


const review = reviews[0];


it(`Should Review render correctly`, () => {
  const tree = renderer
    .create(
        <Review review={review} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

