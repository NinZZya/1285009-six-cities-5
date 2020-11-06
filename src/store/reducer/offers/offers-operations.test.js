import MockAdapter from 'axios-mock-adapter';
import * as CitiesType from '../cities/cities-types';
import * as OffersType from './offers-types';
import * as OffersOperations from './offers-operations';
import NameSpace from '../name-space';
import Api, {ApiRoute} from '../../../services/api';
import {clientCities} from '../../../mocks/cities';
import {
  clientOffers,
  clientFavoriteOffers,
  offersMap,
} from '../../../mocks/offers';
import reviews from '../../../mocks/reviews';
import {
  serverOffers,
  serverReviews,
  serverFavoritesOffers,
} from '../../../mocks/server-data';
import store from '../../../mocks/store';
import {DataStatus} from '../../../constants/const';
import {extend} from '../../../utils/utils';


const api = new Api(() => {});
const ID = serverOffers[0].id;
const OFFER = clientOffers[ID];
const REVIEW = {
  id: 0,
  user: {
    id: 3,
    name: `John`,
    avatar: `/img/avatar.svg`,
    isPro: true,
  },
  date: `2019-11-26`,
  rate: 2,
  text: `Review`,
};

describe(`Testing Offers operation`, () => {
  it(`Testing action: loadOffersAsync (empty)`, () => {
    const apiMock = new MockAdapter(api.getApi());
    apiMock
      .onGet(ApiRoute.OFFERS)
      .reply(200, []);

    const dispatch = jest.fn();
    const loadOffers = OffersOperations.loadOffersAsync();

    return loadOffers(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: OffersType.SET_OFFERS,
          payload: {},
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: OffersType.CHANGE_OFFERS_STATUS,
          payload: DataStatus.SUCCESS,
        });
      });
  });

  it(`Testing action: loadOffersAsync`, () => {
    const apiMock = new MockAdapter(api.getApi());
    apiMock
      .onGet(ApiRoute.OFFERS)
      .reply(200, serverOffers);

    const dispatch = jest.fn();
    const loadOffers = OffersOperations.loadOffersAsync();

    return loadOffers(dispatch, () => store, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: CitiesType.SET_CITIES,
          payload: clientCities,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: OffersType.SET_OFFERS,
          payload: clientOffers,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: OffersType.CHANGE_OFFERS_STATUS,
          payload: DataStatus.SUCCESS,
        });
      });
  });

  it(`Testing action: loadOfferAsync`, () => {
    const testStore = extend(store);
    testStore[NameSpace.OFFERS].offers = {};

    const apiMock = new MockAdapter(api.getApi());
    apiMock
      .onGet(`${ApiRoute.OFFERS}${ID}`)
      .reply(200, serverOffers[0]);

    const dispatch = jest.fn();
    const loadOffer = OffersOperations.loadOfferAsync(ID);

    return loadOffer(dispatch, () => testStore, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: OffersType.CHANGE_OFFER_STATUS,
          payload: DataStatus.LOADING,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: OffersType.SET_OFFERS,
          payload: {
            [ID]: OFFER,
          },
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: OffersType.CHANGE_OFFER_STATUS,
          payload: DataStatus.SUCCESS,
        });
      });
  });

  it(`Testing action: loadOfferReviewsAsync`, () => {
    const apiMock = new MockAdapter(api.getApi());
    apiMock
      .onGet(`${ApiRoute.REVIEWS}${ID}`)
      .reply(200, serverReviews);

    const dispatch = jest.fn();
    const loadOfferReviews = OffersOperations.loadOfferReviewsAsync(ID);

    return loadOfferReviews(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: OffersType.CHANGE_OFFER_REVIEWS_STATUS,
          payload: DataStatus.LOADING,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: OffersType.SET_OFFER_REVIEWS,
          payload: reviews,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: OffersType.CHANGE_OFFER_REVIEWS_STATUS,
          payload: DataStatus.SUCCESS,
        });
      });
  });

  it(`Testing action: addOfferReviewAsync`, () => {
    const apiMock = new MockAdapter(api.getApi());
    apiMock
      .onPost(`${ApiRoute.REVIEWS}${ID}`)
      .reply(200, serverReviews);

    const dispatch = jest.fn();
    const addOfferReview = OffersOperations.addOfferReviewAsync(ID, REVIEW);

    return addOfferReview(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: OffersType.CHANGE_OFFER_REVIEWS_STATUS,
          payload: DataStatus.SENDING,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: OffersType.SET_OFFER_REVIEWS,
          payload: reviews,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: OffersType.CHANGE_OFFER_REVIEWS_STATUS,
          payload: DataStatus.SUCCESS,
        });
      });
  });

  it(`Testing action: loadNearOffersAsync`, () => {
    const apiMock = new MockAdapter(api.getApi());
    const nearOffers = Object.values(clientOffers);

    apiMock
      .onGet(`${ApiRoute.OFFERS}${ID}${ApiRoute.NEAR}`)
      .reply(200, serverOffers);

    const dispatch = jest.fn();
    const loadNearOffers = OffersOperations.loadNearOffersAsync(ID);

    return loadNearOffers(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: OffersType.CHANGE_NEAR_OFFERS_STATUS,
          payload: DataStatus.LOADING,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: OffersType.SET_NEAR_OFFERS,
          payload: nearOffers,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: OffersType.CHANGE_NEAR_OFFERS_STATUS,
          payload: DataStatus.SUCCESS,
        });
      });
  });

  it(`Testing action: loadFavoritesOffersAsync`, () => {
    const apiMock = new MockAdapter(api.getApi());
    const testStore = extend(store);
    testStore[NameSpace.OFFERS].offers = offersMap;

    apiMock
      .onGet(ApiRoute.FAVORITES)
      .reply(200, serverFavoritesOffers);

    const dispatch = jest.fn();
    const loadFavoritesOffers = OffersOperations.loadFavoritesOffersAsync(ID);

    return loadFavoritesOffers(dispatch, () => testStore, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: OffersType.SET_FAVORITES_OFFERS,
          payload: clientFavoriteOffers,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: OffersType.SET_OFFERS,
          payload: offersMap,
        });
      });
  });

  it(`Testing action: changeFavoriteOfferAsync`, () => {
    const apiMock = new MockAdapter(api.getApi());
    const STATUS = 1;

    apiMock
      .onPost(`${ApiRoute.FAVORITES}${ID}/${STATUS}`)
      .reply(200, serverFavoritesOffers[0]);

    const dispatch = jest.fn();
    const changeFavoriteOffer = OffersOperations.changeFavoriteOfferAsync(ID, STATUS);

    return changeFavoriteOffer(dispatch, () => store, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
      });
  });
});

