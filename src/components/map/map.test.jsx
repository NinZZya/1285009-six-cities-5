import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map';

describe(`Should Map render correctly`, () => {
  it(`Should Map render correctly`, () => {
    const tree = renderer
      .create(
          <Map />,
          {createNodeMock: () => {
            return document.createElement(`div`);
          }}
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
