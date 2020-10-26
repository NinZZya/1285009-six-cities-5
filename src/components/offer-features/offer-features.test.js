import React from 'react';
import renderer from 'react-test-renderer';
import OfferFeatures from './offer-features';
import OfferFeature from './components/offer-feature/offer-feature';

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


it(`Should OfferFeatures render correctly`, () => {
  const tree = renderer
    .create(
        <OfferFeatures>
          <OfferFeature type={Feature.ENTIRE.type} value={Feature.ENTIRE.value} />
          <OfferFeature type={Feature.BEDROOMS.type} value={Feature.BEDROOMS.value} />
          <OfferFeature type={Feature.ADULTS.type} value={Feature.ADULTS.value} />
        </OfferFeatures>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
