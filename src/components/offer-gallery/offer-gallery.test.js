import React from 'react';
import renderer from 'react-test-renderer';
import OfferGallery from './offer-gallery';
import offers from '@/mocks/offers';

const IMAGES = offers[0].images;

describe(`Should OfferGallery render correctly`, () => {
  it(`Should OfferGallery render correctly with images`, () => {
    const tree = renderer
      .create(
          <OfferGallery images={IMAGES} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should OfferGallery render correctly without images`, () => {
    const tree = renderer
      .create(
          <OfferGallery />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

