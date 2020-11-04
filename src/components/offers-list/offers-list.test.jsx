import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import OffersList, {OffersListType} from './offers-list';
import store from '../../store/store';
import history from '../../constants/history';
import offers from '../../mocks/offers';


const testing = () => {};

describe(`Should OffersList render correctly`, () => {
  it(`Should OffersList render correctly empty component`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <OffersList />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should OffersList render correctly whith offers`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <OffersList
                onOfferHover={testing}
                offers={offers}
              />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should OffersList render correctly whith offers and favorites type`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <OffersList
                type={OffersListType.FAVORITES}
                onOfferHover={testing}
                offers={offers}
              />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should OffersList render correctly whith offers and main type`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <OffersList
                type={OffersListType.MAIN}
                onOfferHover={testing}
                offers={offers}
              />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should OffersList render correctly whith offers and near type`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <OffersList
                type={OffersListType.NEAR}
                onOfferHover={testing}
                offers={offers}
              />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

