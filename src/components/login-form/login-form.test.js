import React from 'react';
import renderer from 'react-test-renderer';
import LoginForm from './login-form';
import {UserStatus} from '~/constants/const';


const ERROR = `Error`;
const testing = () => {};

describe(`Should LoginForm render correctly`, () => {
  it(`Should LoginForm render correctly no auth`, () => {
    const tree = renderer
      .create(
          <LoginForm
            userStatus={UserStatus.NO_AUTH}
            onAuth={testing}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should LoginForm render correctly error`, () => {
    const tree = renderer
      .create(
          <LoginForm
            userStatus={UserStatus.ERROR}
            onAuth={testing}
            error={ERROR}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should LoginForm render correctly responce`, () => {
    const tree = renderer
      .create(
          <LoginForm
            userStatus={UserStatus.RESPONSE}
            onAuth={testing}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
