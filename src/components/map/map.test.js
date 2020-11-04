import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map';
import offers from '@/mocks/offers';

const CENTER = offers[0];
const PINS = offers;
const ACTIVE_ID = 0;

describe(`Should Map render correctly`, () => {
  it(`Should Map render correctly with pins`, () => {
    const tree = renderer
      .create(
          <Map
            center={CENTER}
            pins={PINS}
            activeId={ACTIVE_ID}
          />,
          {createNodeMock: () => {
            return document.createElement(`div`);
          }}
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Map render correctly without pins`, () => {
    const tree = renderer
      .create(
          <Map
            center={CENTER}
            pins={[]}
            activeId={ACTIVE_ID}
          />,
          {createNodeMock: () => {
            return document.createElement(`div`);
          }}
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
