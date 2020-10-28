import React from 'react';
import renderer from 'react-test-renderer';
import OfferHost from './offer-host';
import offers from '../../mocks/offers';

const HOST = offers[0].host;
const DESCRIPTION = offers[0].description;

it(`Should OfferHost render correctly`, () => {
  const tree = renderer
    .create(
        <OfferHost
          host={HOST}
          description={DESCRIPTION}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

