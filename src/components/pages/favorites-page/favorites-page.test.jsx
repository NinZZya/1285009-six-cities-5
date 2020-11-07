import React from 'react';
import {Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import {FavoritesPage} from './favorites-page';
import history from '../../../constants/history';
import {DataStatus} from '../../../constants/const';
import {favoritesOffers} from '../../../mocks/offers';


describe(`Should FavoritesPage render correctly`, () => {
  it(`Should FavoritesPage render correctly loading`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <FavoritesPage
              offersStatus={DataStatus.LOADING}
            />
          </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should FavoritesPage render correctly error`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <FavoritesPage
              offersStatus={DataStatus.ERROR}
            />
          </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should FavoritesPage render correctly success with offers`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <FavoritesPage
              offersStatus={DataStatus.ERROR}
              favorites={favoritesOffers}
            />
          </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
