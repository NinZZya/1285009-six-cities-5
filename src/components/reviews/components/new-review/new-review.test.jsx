import React from 'react';
import renderer from 'react-test-renderer';
import NewReview from './new-review';
import {DataStatus} from '../../../../constants/const';

const testing = () => {};

describe(`Should NewReview render correctly`, () => {
  it(`Should NewReview render correctly with status SENDING`, () => {
    const tree = renderer
      .create(
          <NewReview
            reviewsStatus={DataStatus.SENDING}
            onSubmitReview={testing}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should NewReview render correctly with status SUCCESS`, () => {
    const tree = renderer
      .create(
          <NewReview
            reviewsStatus={DataStatus.SUCCESS}
            onSubmitReview={testing}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should NewReview render correctly with status ERROR`, () => {
    const tree = renderer
      .create(
          <NewReview
            reviewsStatus={DataStatus.ERROR}
            onSubmitReview={testing}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
