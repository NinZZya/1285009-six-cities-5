import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import OfferItem from './offers-item';
import {OffersListType} from '../../offers-list';
import store from '../../../../store/store';
import history from '../../../../constants/history';
import offers from '../../../../mocks/offers';


const testing = () => {};
const OFFER = offers[0];

describe(`Should OfferItem render correctly`, () => {
  it(`Should OfferItem render correctly whith offer`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <OfferItem
                onOfferHover={testing}
                offer={OFFER}
              />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should OfferItem render correctly whith offer and favorites type`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <OfferItem
                type={OffersListType.FAVORITES}
                onOfferHover={testing}
                offer={OFFER}
              />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should OfferItem render correctly whith offer and main type`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <OfferItem
                type={OffersListType.MAIN}
                onOfferHover={testing}
                offer={OFFER}
              />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should OfferItem render correctly whith offer and near type`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <OfferItem
                type={OffersListType.NEAR}
                onOfferHover={testing}
                offer={OFFER}
              />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

