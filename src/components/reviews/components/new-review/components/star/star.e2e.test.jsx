import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Star from './star';
import {STARS} from '../../../../../../constants/const';


const STAR = STARS[0];

configure({adapter: new Adapter()});

it(`Should Star was clicked`, () => {
  const onStarChange = jest.fn();

  const wrapper = shallow(
      <Star
        star={STAR}
        onStarChange={onStarChange}
      />
  );

  const star = wrapper.find(`.form__rating-input`);
  star.simulate(`change`, {target: {checked: true}});
  expect(onStarChange).toHaveBeenCalledTimes(1);
});
