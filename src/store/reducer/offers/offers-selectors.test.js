import * as OffersSelector from './offers-selectors';
import offers, {
  favoritesOffers,
  offersMap,
  sortedFromHightToLowOffers,
} from '../../../mocks/offers';
import store from '../../../mocks/store';
import reviews from '../../../mocks/reviews';
import {DataStatus, SortType} from '../../../constants/const';


const DATA_STATUS = DataStatus.SUCCESS;
const SORT_TYPE = SortType.HIGH_TO_LOW;
const ID = 0;
const OFFER = offersMap[ID];

describe(`Testing Offers selectors`, () => {
  it(`Testing action: getOffersStatus`, () => {
    expect(
        OffersSelector.getOffersStatus(store)
    ).toBe(DATA_STATUS);
  });

  it(`Testing action: getOffers`, () => {
    expect(
        OffersSelector.getOffers(store)
    ).toEqual(offers);
  });

  it(`Testing action: getOffersMap`, () => {
    expect(
        OffersSelector.getOffersMap(store)
    ).toEqual(offersMap);
  });

  it(`Testing action: getOffersMap`, () => {
    expect(
        OffersSelector.getOffersSortType(store)
    ).toBe(SORT_TYPE);
  });

  it(`Testing action: getOfferStatus`, () => {
    expect(
        OffersSelector.getOfferStatus(store)
    ).toBe(DATA_STATUS);
  });

  it(`Testing action: getOfferStatus`, () => {
    expect(
        OffersSelector.getOffer(store, ID)
    ).toEqual(OFFER);
  });

  it(`Testing action: getOfferReviewsStatus`, () => {
    expect(
        OffersSelector.getOfferReviewsStatus(store)
    ).toBe(DATA_STATUS);
  });

  it(`Testing action: getOfferReviews`, () => {
    expect(
        OffersSelector.getOfferReviews(store)
    ).toEqual(reviews);
  });

  it(`Testing action: getNearOffersStatus`, () => {
    expect(
        OffersSelector.getNearOffersStatus(store)
    ).toBe(DATA_STATUS);
  });

  it(`Testing action: getNearOffers`, () => {
    expect(
        OffersSelector.getNearOffers(store)
    ).toEqual(offers);
  });

  it(`Testing action: getFavoritesOffersMap`, () => {
    expect(
        OffersSelector.getFavoritesOffersMap(store)
    ).toEqual(offersMap);
  });

  it(`Testing action: getFavoritesOffers`, () => {
    expect(
        OffersSelector.getFavoritesOffers(store)
    ).toEqual(favoritesOffers);
  });

  it(`Testing action: getFavoritesOffers`, () => {
    expect(
        OffersSelector.getFavoritesOffers(store)
    ).toEqual(favoritesOffers);
  });

  it(`Testing action: getSortedCityOffers`, () => {
    expect(
        OffersSelector.getSortedCityOffers(store)
    ).toEqual(sortedFromHightToLowOffers);
  });
});
