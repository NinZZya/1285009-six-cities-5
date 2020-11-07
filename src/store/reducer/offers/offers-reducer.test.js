import * as OffersType from './offers-types';
import offersReducer, {initialState} from './offers-reducer';
import offers, {favoritesOffers} from '../../../mocks/offers';
import reviews from '../../../mocks/reviews';
import {DataStatus, SortType} from '../../../constants/const';


const DATA_STATUS = DataStatus.SUCCESS;
const SORT_TYPE = SortType.HIGH_TO_LOW;

const CHANGE_OFFERS_STATUS_ACTION = {
  type: OffersType.CHANGE_OFFERS_STATUS,
  payload: DATA_STATUS,
};

const SET_OFFERS_ACTION = {
  type: OffersType.SET_OFFERS,
  payload: offers,
};

const CHANGE_OFFERS_SORT_TYPE_ACTION = {
  type: OffersType.CHANGE_OFFERS_SORT_TYPE,
  payload: SORT_TYPE,
};

const CHANGE_OFFER_STATUS_ACTION = {
  type: OffersType.CHANGE_OFFER_STATUS,
  payload: DATA_STATUS,
};

const CHANGE_OFFER_REVIEWS_STATUS_ACTION = {
  type: OffersType.CHANGE_OFFER_REVIEWS_STATUS,
  payload: DATA_STATUS,
};

const SET_OFFER_REVIEWS_ACTION = {
  type: OffersType.SET_OFFER_REVIEWS,
  payload: reviews,
};

const CHANGE_NEAR_OFFERS_STATUS_ACTION = {
  type: OffersType.CHANGE_NEAR_OFFERS_STATUS,
  payload: DATA_STATUS,
};

const SET_NEAR_OFFERS_ACTION = {
  type: OffersType.SET_NEAR_OFFERS,
  payload: offers,
};

const SET_FAVORITES_OFFERS_ACTION = {
  type: OffersType.SET_FAVORITES_OFFERS,
  payload: favoritesOffers,
};

describe(`Testing User reducer`, () => {
  it(`Testing initialState`, () => {
    expect(
        offersReducer(void 0, {type: ``})
    ).toMatchObject(initialState);
  });

  it(`Testing CHANGE_OFFERS_STATUS_ACTION = ${CHANGE_OFFERS_STATUS_ACTION}`, () => {
    expect(
        offersReducer({}, CHANGE_OFFERS_STATUS_ACTION)
    ).toMatchObject({
      status: DATA_STATUS,
    });
  });

  it(`Testing SET_OFFERS_ACTION = ${SET_OFFERS_ACTION}`, () => {
    expect(
        offersReducer({}, SET_OFFERS_ACTION)
    ).toMatchObject({
      offers,
    });
  });

  it(`Testing CHANGE_OFFERS_SORT_TYPE_ACTION = ${CHANGE_OFFERS_SORT_TYPE_ACTION}`, () => {
    expect(
        offersReducer({}, CHANGE_OFFERS_SORT_TYPE_ACTION)
    ).toMatchObject({
      sortType: SORT_TYPE,
    });
  });

  it(`Testing CHANGE_OFFER_STATUS_ACTION = ${CHANGE_OFFER_STATUS_ACTION}`, () => {
    expect(
        offersReducer({}, CHANGE_OFFER_STATUS_ACTION)
    ).toMatchObject({
      offerStatus: DATA_STATUS,
    });
  });

  it(`Testing CHANGE_OFFER_REVIEWS_STATUS_ACTION = ${CHANGE_OFFER_REVIEWS_STATUS_ACTION}`, () => {
    expect(
        offersReducer({}, CHANGE_OFFER_REVIEWS_STATUS_ACTION)
    ).toMatchObject({
      reviewsStatus: DATA_STATUS,
    });
  });

  it(`Testing SET_OFFER_REVIEWS_ACTION = ${SET_OFFER_REVIEWS_ACTION}`, () => {
    expect(
        offersReducer({}, SET_OFFER_REVIEWS_ACTION)
    ).toMatchObject({
      reviews,
    });
  });

  it(`Testing CHANGE_NEAR_OFFERS_STATUS_ACTION = ${CHANGE_NEAR_OFFERS_STATUS_ACTION}`, () => {
    expect(
        offersReducer({}, CHANGE_NEAR_OFFERS_STATUS_ACTION)
    ).toMatchObject({
      nearOffersStatus: DATA_STATUS,
    });
  });

  it(`Testing SET_NEAR_OFFERS_ACTION = ${SET_NEAR_OFFERS_ACTION}`, () => {
    expect(
        offersReducer({}, SET_NEAR_OFFERS_ACTION)
    ).toMatchObject({
      nearOffers: offers,
    });
  });

  it(`Testing SET_FAVORITES_OFFERS_ACTION = ${SET_FAVORITES_OFFERS_ACTION}`, () => {
    expect(
        offersReducer({}, SET_FAVORITES_OFFERS_ACTION)
    ).toMatchObject({
      favorites: favoritesOffers,
    });
  });
});
