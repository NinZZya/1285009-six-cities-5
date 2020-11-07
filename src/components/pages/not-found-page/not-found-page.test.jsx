import React from 'react';
import {Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import NotFoundPage from './not-found-page';
import history from '../../../constants/history';


describe(`Should NotFoundPage render correctly`, () => {
  it(`Should NotFoundPage render correctly`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <NotFoundPage />
          </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
