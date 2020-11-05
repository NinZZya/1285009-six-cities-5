import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NewReview from './new-review';
import {user} from '../../../../mocks/users';
import {DataStatus} from '../../../../constants/const';


configure({adapter: new Adapter()});

it(`Should NewReview was submited`, () => {
  const onSubmitReview = jest.fn();

  const wrapper = mount(
      <NewReview
        reviewsStatus={DataStatus.SUCCESS}
        user={user}
        onSubmitReview={onSubmitReview}
        form={{}}
      />
  );

  const form = wrapper.find(`form`);

  form.simulate(`submit`, {preventDefault() {}});
  expect(onSubmitReview).toHaveBeenCalledTimes(1);
});
