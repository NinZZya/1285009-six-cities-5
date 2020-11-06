import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NewReview, {FormName} from './new-review';
import {user} from '../../../../mocks/users';
import {DataStatus} from '../../../../constants/const';


configure({adapter: new Adapter()});
const RATE = 5;
const TEXT = `TEXT`;

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
  const star = wrapper.find(`.form__rating-input`).at(1);
  const text = wrapper.find(`textarea`);

  star.simulate(`change`, {
    target: {
      name: FormName.RATE,
      value: RATE,
    },
  });

  text.simulate(`change`, {
    target: {
      name: FormName.REVIEW,
      value: TEXT,
    },
  });

  form.simulate(`submit`, {preventDefault() {}});
  expect(onSubmitReview).toHaveBeenCalledTimes(1);
  expect(onSubmitReview).toHaveBeenCalledWith({
    rate: RATE,
    text: TEXT,
  });
});
