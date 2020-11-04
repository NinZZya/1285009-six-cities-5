import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import Header from './header';
import history from '@/history';
import {UserStatus} from '@/const';
import {user} from '@/mocks/users';


describe(`Should Header render correctly`, () => {
  it(`Should LoginForm render correctly when user no auth`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <Header
              userStatus={UserStatus.NO_AUTH}
              user={{}}
            />
          </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Header render correctly when user auth`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <Header
              userStatus={UserStatus.AUTH}
              user={user}
            />
          </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
