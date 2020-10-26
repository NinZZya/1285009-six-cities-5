import React from 'react';
import renderer from 'react-test-renderer';
import Reviews from './reviews';
import reviews from '../../mocks/reviews';


describe(`Should Reviews render correctly`, () => {
  it(`Should Reviews render correctly when no reviews`, () => {
    const tree = renderer
      .create(
          <Reviews />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Reviews render correctly whith reviews`, () => {
    const tree = renderer
      .create(
          <Reviews reviews={reviews} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


