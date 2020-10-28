import React from 'react';
import renderer from 'react-test-renderer';
import OfferMark from './offer-mark';


const Type = {
  MAIN_CARD: `place-card`,
  OFFER_CARD: `property`,
};

describe(`Should OfferMark render correctly`, () => {
  it(`Should OfferMark render correctly main card type`, () => {
    const tree = renderer
      .create(
          <OfferMark type={Type.MAIN_CARD} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should OfferMark render correctly offer card type`, () => {
    const tree = renderer
      .create(
          <OfferMark type={Type.OFFER_CARD} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

