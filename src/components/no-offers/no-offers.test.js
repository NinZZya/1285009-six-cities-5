import React from 'react';
import renderer from 'react-test-renderer';
import NoOffers from './no-offers';
import cities from '~/mocks/cities';


const CITY = cities[1];

it(`Should NoOffers render correctly`, () => {
  const tree = renderer
    .create(
        <NoOffers city={CITY} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
