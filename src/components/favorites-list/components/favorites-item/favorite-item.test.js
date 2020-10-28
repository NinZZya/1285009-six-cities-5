import React from 'react';
import {Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import FavoritesItem from './favorites-item';
import history from '../../../../history';
import offers from '../../../../mocks/offers';


describe(`Should FavoritesItem render correctly`, () => {
  it(`Should FavoritesItem render correctly when no offers`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <FavoritesItem />
          </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should FavoritesItem render correctly whith offers`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <FavoritesItem
              favorites={offers}
            />
          </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


