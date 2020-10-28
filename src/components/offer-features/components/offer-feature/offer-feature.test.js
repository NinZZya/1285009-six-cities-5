import React from 'react';
import renderer from 'react-test-renderer';
import OfferFeature from './offer-feature';

const Feature = {
  ENTIRE: {
    type: `entire`,
    value: `Private room`,
  },
  BEDROOMS: {
    type: `bedrooms`,
    value: `2 Bedrooms`,
  },
  ADULTS: {
    type: `adults`,
    value: `Max 3 adults`,
  },
};

describe(`Should OfferFeature render correctly`, () => {
  it(`Should OfferFeature render correctly type entire`, () => {
    const tree = renderer
      .create(
          <OfferFeature type={Feature.ENTIRE.type} value={Feature.ENTIRE.value} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });


  it(`Should OfferFeature render correctly type bedrooms`, () => {
    const tree = renderer
      .create(
          <OfferFeature type={Feature.BEDROOMS.type} value={Feature.BEDROOMS.value} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should OfferFeature render correctly type adults`, () => {
    const tree = renderer
      .create(
          <OfferFeature type={Feature.ADULTS.type} value={Feature.ADULTS.value} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

