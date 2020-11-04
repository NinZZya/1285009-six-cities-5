import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {App} from './app';
import {UserStatus} from '../../constants/const';
import history from '../../constants/history';
import store from '../../store/store';
import {user} from '../../mocks/users';


describe(`Should App render correctly`, () => {
  it(`Render App`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <App
                userStatus={UserStatus.NO_AUTH}
                user={user}
              />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
