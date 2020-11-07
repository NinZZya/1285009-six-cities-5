import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import FavoritesList from './favorites-list';
import store from '../../store/store';
import history from '../../constants/history';
import {favoritesOffers} from '../../mocks/offers';


describe(`Should FavoritesList render correctly`, () => {
  it(`Should FavoritesList render correctly when no offers`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <FavoritesList />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should FavoritesList render correctly whith offers`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <FavoritesList
                favorites={favoritesOffers}
              />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
