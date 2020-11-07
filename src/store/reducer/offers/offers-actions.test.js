import * as OffersType from './offers-types';
import * as OffersAction from './offers-actions';
import offers, {favoritesOffers} from '../../../mocks/offers';
import reviews from '../../../mocks/reviews';
import {DataStatus, SortType} from '../../../constants/const';


const DATA_STATUS = DataStatus.SUCCESS;
const SORT_TYPE = SortType.HIGH_TO_LOW;

describe(`Testing Offers actions`, () => {
  it(`Testing action: changeOffersStatus`, () => {
    expect(
        OffersAction.changeOffersStatus(DATA_STATUS)
    ).toMatchObject({
      type: OffersType.CHANGE_OFFERS_STATUS,
      payload: DATA_STATUS,
    });
  });

  it(`Testing action: setOffers`, () => {
    expect(
        OffersAction.setOffers(offers)
    ).toMatchObject({
      type: OffersType.SET_OFFERS,
      payload: offers,
    });
  });

  it(`Testing action: changeOffersSortType`, () => {
    expect(
        OffersAction.changeOffersSortType(SORT_TYPE)
    ).toMatchObject({
      type: OffersType.CHANGE_OFFERS_SORT_TYPE,
      payload: SORT_TYPE,
    });
  });

  it(`Testing action: changeOfferStatus`, () => {
    expect(
        OffersAction.changeOfferStatus(DATA_STATUS)
    ).toMatchObject({
      type: OffersType.CHANGE_OFFER_STATUS,
      payload: DATA_STATUS,
    });
  });

  it(`Testing action: changeOfferReviewsStatus`, () => {
    expect(
        OffersAction.changeOfferReviewsStatus(DATA_STATUS)
    ).toMatchObject({
      type: OffersType.CHANGE_OFFER_REVIEWS_STATUS,
      payload: DATA_STATUS,
    });
  });

  it(`Testing action: setOfferReviews`, () => {
    expect(
        OffersAction.setOfferReviews(reviews)
    ).toMatchObject({
      type: OffersType.SET_OFFER_REVIEWS,
      payload: reviews,
    });
  });

  it(`Testing action: changeNearOffersStatus`, () => {
    expect(
        OffersAction.changeNearOffersStatus(DATA_STATUS)
    ).toMatchObject({
      type: OffersType.CHANGE_NEAR_OFFERS_STATUS,
      payload: DATA_STATUS,
    });
  });

  it(`Testing action: setNearOffers`, () => {
    expect(
        OffersAction.setNearOffers(offers)
    ).toMatchObject({
      type: OffersType.SET_NEAR_OFFERS,
      payload: offers,
    });
  });

  it(`Testing action: setFavoritesOffers`, () => {
    expect(
        OffersAction.setFavoritesOffers(favoritesOffers)
    ).toMatchObject({
      type: OffersType.SET_FAVORITES_OFFERS,
      payload: favoritesOffers,
    });
  });
});
