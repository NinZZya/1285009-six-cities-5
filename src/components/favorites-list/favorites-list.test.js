import React from 'react';
import {Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import FavoritesList from './favorites-list';
import history from '../../history';
import {favoritesOffers} from '../../mocks/offers';


describe(`Should FavoritesList render correctly`, () => {
  it(`Should FavoritesList render correctly when no offers`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <FavoritesList />
          </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should FavoritesList render correctly whith offers`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <FavoritesList
              favorites={favoritesOffers}
            />
          </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
