import React from 'react';
import renderer from 'react-test-renderer';
import {NewReview} from './new-review';
import {user} from '../../../../mocks/users';
import reviews from '../../../../mocks/reviews';
import {DataStatus} from '../../../../const';


const validForm = {
  review: reviews[0].text,
  rating: `true`,
};

const invalidRateAndValidReviewForm = {
  review: reviews[0].text,
};

const invalidReviewAndValidRateForm = {
  review: ``,
  rating: `true`,
};

const invalidForm = {
  review: ``,
};

const testing = () => {};

describe(`Should NewReview render correctly`, () => {
  it(`Should NewReview render correctly with valid form and no sending`, () => {
    const tree = renderer
      .create(
          <NewReview
            reviewsStatus={DataStatus.SUCCESS}
            user={user}
            onFormValuesChange={testing}
            onSubmitReview={testing}
            onFormValuesReset={testing}
            form={validForm}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should NewReview render correctly with valid form and sending`, () => {
    const tree = renderer
      .create(
          <NewReview
            reviewsStatus={DataStatus.SENDING}
            user={user}
            onFormValuesChange={testing}
            onSubmitReview={testing}
            onFormValuesReset={testing}
            form={validForm}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should NewReview render correctly with invalid rate and valid review`, () => {
    const tree = renderer
      .create(
          <NewReview
            reviewsStatus={DataStatus.SUCCESS}
            user={user}
            onFormValuesChange={testing}
            onSubmitReview={testing}
            onFormValuesReset={testing}
            form={invalidRateAndValidReviewForm}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should NewReview render correctly with valid rate and invalid review`, () => {
    const tree = renderer
      .create(
          <NewReview
            reviewsStatus={DataStatus.SUCCESS}
            user={user}
            onFormValuesChange={testing}
            onSubmitReview={testing}
            onFormValuesReset={testing}
            form={invalidReviewAndValidRateForm}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should NewReview render correctly with invalid rate and invalid review`, () => {
    const tree = renderer
      .create(
          <NewReview
            reviewsStatus={DataStatus.SUCCESS}
            user={user}
            onFormValuesChange={testing}
            onSubmitReview={testing}
            onFormValuesReset={testing}
            form={invalidForm}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
