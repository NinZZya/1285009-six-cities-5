import React from 'react';
import renderer from 'react-test-renderer';
import OfferPrice from './offer-price';


const PRICE = 100;
const Type = {
  MAIN_CARD: `place-card`,
  OFFER_CARD: `property`,
};

describe(`Should OfferPrice render correctly`, () => {
  it(`Should OfferPrice render correctly main card type`, () => {
    const tree = renderer
      .create(
          <OfferPrice
            type={Type.MAIN_CARD}
            price={PRICE}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should OfferPrice render correctly offer card type`, () => {
    const tree = renderer
      .create(
          <OfferPrice
            type={Type.OFFER_CARD}
            price={PRICE}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

