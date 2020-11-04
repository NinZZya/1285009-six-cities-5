import React from 'react';
import {Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import {LoginPage} from './login-page';
import history from '../../../constants/history';
import {UserStatus} from '../../../constants/const';
import cities from '../../../mocks/cities';


const ACTIVE_CITY_ID = 4;

const ERROR = `Error`;
const testing = () => {};

describe(`Should LoginPage render correctly`, () => {
  it(`Should LoginPage render correctly no auth`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <LoginPage
              activeCityId={ACTIVE_CITY_ID}
              userStatus={UserStatus.NO_AUTH}
              cities={cities}
              auth={testing}
              changeUserStatus={testing}
            />
          </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should LoginPage render correctly error`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <LoginPage
              activeCityId={ACTIVE_CITY_ID}
              userStatus={UserStatus.AUTH_ERROR}
              error={ERROR}
              cities={cities}
              auth={testing}
              changeUserStatus={testing}
            />
          </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should LoginPage render correctly responce`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <LoginPage
              activeCityId={ACTIVE_CITY_ID}
              userStatus={UserStatus.AUTH}
              cities={cities}
              auth={testing}
              changeUserStatus={testing}
            />
          </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
