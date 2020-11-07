import React from 'react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import {OfferPage} from './offer-page';
import store from '../../../store/store';
import history from '../../../constants/history';
import {DataStatus, UserStatus} from '../../../constants/const';
import offers from '../../../mocks/offers';
import reviews from '../../../mocks/reviews';
import {user} from '../../../mocks/users';


const match = {
  path: `offer/1`,
  params: {
    offerId: ``,
  },
};

const testing = () => {};
const getOffer = (id) => offers[id];


describe(`Should OfferPage render correctly`, () => {
  it(`Should OfferPage render correctly loading and nearOffers loading, and comments loading`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <OfferPage
              offersStatus={DataStatus.LOADING}
              getOffer={getOffer}
              nearOffersStatus={DataStatus.LOADING}
              nearOffers={[]}
              reviewsStatus={DataStatus.LOADING}
              reviews={[]}
              match={match}
              loadOffer={testing}
              loadReviews={testing}
              loadNearOffers={testing}
              addReview={testing}
              userStatus={UserStatus.NO_AUTH}
              user={user}
            />
          </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should OfferPage render correctly sucsess and nearOffers loading, and comments loading`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <OfferPage
                offersStatus={DataStatus.SUCCESS}
                getOffer={getOffer}
                nearOffersStatus={DataStatus.LOADING}
                nearOffers={offers}
                reviewsStatus={DataStatus.LOADING}
                reviews={[]}
                match={match}
                loadOffer={testing}
                loadReviews={testing}
                loadNearOffers={testing}
                addReview={testing}
                userStatus={UserStatus.NO_AUTH}
                user={user}
              />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should OfferPage render correctly sucsess and nearOffers sucsess, and comments loading`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <OfferPage
                offersStatus={DataStatus.SUCCESS}
                getOffer={getOffer}
                nearOffersStatus={DataStatus.SUCCESS}
                nearOffers={offers}
                reviewsStatus={DataStatus.LOADING}
                reviews={reviews}
                match={match}
                loadOffer={testing}
                loadReviews={testing}
                loadNearOffers={testing}
                addReview={testing}
                userStatus={UserStatus.NO_AUTH}
                user={user}
              />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should OfferPage render correctly sucsess and nearOffers sucsess, and comments sucsess`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <OfferPage
                offersStatus={DataStatus.SUCCESS}
                getOffer={getOffer}
                nearOffersStatus={DataStatus.SUCCESS}
                nearOffers={[]}
                reviewsStatus={DataStatus.SUCCESS}
                reviews={reviews}
                match={match}
                loadOffer={testing}
                loadReviews={testing}
                loadNearOffers={testing}
                addReview={testing}
                userStatus={UserStatus.NO_AUTH}
                user={user}
              />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should OfferPage render correctly sucsess and nearOffers sucsess, and comments sucsess, and user auth`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <OfferPage
                offersStatus={DataStatus.SUCCESS}
                getOffer={getOffer}
                nearOffersStatus={DataStatus.SUCCESS}
                nearOffers={[]}
                reviewsStatus={DataStatus.SUCCESS}
                reviews={reviews}
                match={match}
                loadOffer={testing}
                loadReviews={testing}
                loadNearOffers={testing}
                addReview={testing}
                userStatus={UserStatus.AUTH}
                user={user}
              />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should OfferPage render correctly error`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <OfferPage
                offersStatus={DataStatus.ERROR}
                getOffer={getOffer}
                nearOffersStatus={DataStatus.LOADING}
                nearOffers={[]}
                reviewsStatus={DataStatus.LOADING}
                reviews={[]}
                match={match}
                loadOffer={testing}
                loadReviews={testing}
                loadNearOffers={testing}
                addReview={testing}
                userStatus={UserStatus.NO_AUTH}
                user={user}
              />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should OfferPage render correctly sucsess and nearOffers error, and comments loading`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <OfferPage
                offersStatus={DataStatus.SUCCESS}
                getOffer={getOffer}
                nearOffersStatus={DataStatus.ERROR}
                nearOffers={[]}
                reviewsStatus={DataStatus.LOADING}
                reviews={reviews}
                match={match}
                loadOffer={testing}
                loadReviews={testing}
                loadNearOffers={testing}
                addReview={testing}
                userStatus={UserStatus.AUTH}
                user={user}
              />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should OfferPage render correctly sucsess and nearOffers sucsess, and comments error`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <OfferPage
                offersStatus={DataStatus.SUCCESS}
                getOffer={getOffer}
                nearOffersStatus={DataStatus.SUCCESS}
                nearOffers={[]}
                reviewsStatus={DataStatus.ERROR}
                reviews={reviews}
                match={match}
                loadOffer={testing}
                loadReviews={testing}
                loadNearOffers={testing}
                addReview={testing}
                userStatus={UserStatus.AUTH}
                user={user}
              />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
