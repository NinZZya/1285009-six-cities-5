import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginForm from './login-form';
import {UserStatus} from '../../constants/const';


configure({adapter: new Adapter()});

it(`Should LoginForm was submited`, () => {
  const onAuth = jest.fn();

  const wrapper = shallow(
      <LoginForm
        userStatus={UserStatus.NO_AUTH}
        onAuth={onAuth}
      />
  );

  const form = wrapper.find(`form`);
  form.simulate(`submit`, {preventDefault() {}});
  expect(onAuth).toHaveBeenCalledTimes(1);
});
