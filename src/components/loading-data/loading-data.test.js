import React from 'react';
import renderer from 'react-test-renderer';
import LoadingData from './loading-data';
import {DataStatus} from '../../const';


describe(`Should LoadingData render correctly`, () => {
  it(`Should LoadingData render correctly loading`, () => {
    const tree = renderer
      .create(
          <LoadingData status={DataStatus.LOADING} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should LoadingData render correctly error`, () => {
    const tree = renderer
      .create(
          <LoadingData status={DataStatus.ERROR} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should LoadingData render correctly success`, () => {
    const tree = renderer
      .create(
          <LoadingData status={DataStatus.SUCCESS} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
