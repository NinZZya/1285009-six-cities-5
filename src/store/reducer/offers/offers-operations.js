import * as OffersAction from './offers-actions';
import * as OffersSelector from './offers-selectors';
import * as CitiesAction from '@reducer/cities/cities-actions';
import * as CitiesSelector from '@reducer/cities/cities-selectors';
import {
  adaptOffersDataToClient,
  adaptOffersToListToClient,
  adaptOfferToClient,
} from '@/adapters/offers-adapter';
import {adaptCityToClient} from '@/adapters/city-adapter';
import {adaptReviewToServer, adaptReviewsToClent} from '@/adapters/review-adapter';
import {DataStatus} from '@/constants/const';
import {extend} from '@/utils/utils';


export const loadOffersAsync = () => (dispatch, getState, api) => {
  return api.getOffers()
    .then((response) => {
      if (response.length) {
        const state = getState();
        const adaptData = adaptOffersDataToClient(response);
        const {offers, cities} = adaptData;
        const oldCities = CitiesSelector.getCities(state);
        const updatedCities = extend(oldCities, cities);
        dispatch(CitiesAction.setCities(updatedCities));
        dispatch(OffersAction.setOffers(offers));
        dispatch(OffersAction.changeOffersStatus(DataStatus.SUCCESS));
      } else {
        dispatch(OffersAction.setOffers({}));
        dispatch(OffersAction.changeOffersStatus(DataStatus.SUCCESS));
      }


    })
    .catch(() => {
      dispatch(OffersAction.changeOffersStatus(DataStatus.ERROR));
    });
};

export const loadOfferAsync = (id) => (dispatch, getState, api) => {
  dispatch(OffersAction.changeOfferStatus(DataStatus.LOADING));
  return api.getOffer(id)
    .then((response) => {
      const offer = adaptOfferToClient(response);
      const city = adaptCityToClient(response);

      offer.city = city;
      const state = getState();
      const offers = OffersSelector.getOffersMap(state);
      offers[offer.id] = offer;
      dispatch(OffersAction.setOffers(offers));
      dispatch(OffersAction.changeOfferStatus(DataStatus.SUCCESS));
    });
};

export const loadOfferReviewsAsync = (id) => (dispatch, getState, api) => {
  dispatch(OffersAction.changeOfferReviewsStatus(DataStatus.LOADING));
  return api.getReviews(id)
    .then((response) => {
      const reviews = response ?
        adaptReviewsToClent(response) :
        [];

      dispatch(OffersAction.setOfferReviews(reviews));
      dispatch(OffersAction.changeOfferReviewsStatus(DataStatus.SUCCESS));
    });
};

export const addOfferReviewAsync = (id, data) => (dispatch, getState, api) => {
  dispatch(OffersAction.changeOfferReviewsStatus(DataStatus.SENDING));
  const review = adaptReviewToServer(data);
  return api.addReview(id, review)
    .then((response) => {
      const reviews = adaptReviewsToClent(response);

      dispatch(OffersAction.setOfferReviews(reviews));
      dispatch(OffersAction.changeOfferReviewsStatus(DataStatus.SUCCESS));
    })
    .catch(() => {
      dispatch(OffersAction.changeOfferReviewsStatus(DataStatus.ERROR));
    });
};

export const loadNearOffersAsync = (id) => (dispatch, getState, api) => {
  dispatch(OffersAction.changeNearOffersStatus(DataStatus.LOADING));
  return api.getNearOffers(id)
    .then((response) => {
      const nearOffers = response ? adaptOffersToListToClient(response) : [];

      dispatch(OffersAction.setNearOffers(nearOffers));
      dispatch(OffersAction.changeNearOffersStatus(DataStatus.SUCCESS));
    });
};

export const loadFavoritesOffersAsync = () => (dispatch, getState, api) => {
  return api.getFavoritesOffers().then((response) => {
    const favoritesOffers = response.length ? adaptOffersToListToClient(response) : [];
    const state = getState();
    const offers = OffersSelector.getOffersMap(state);

    if (favoritesOffers.length && Object.keys(offers).length) {
      const favorites = favoritesOffers.reduce((map, item) => {
        offers[item.id].isFavorite = true;
        map[item.id] = item;
        return map;
      }, {});

      dispatch(OffersAction.setFavoritesOffers(favorites));
      dispatch(OffersAction.setOffers(offers));
    }
  });
};


export const changeFavoriteOfferAsync = (id, status) => (dispatch, getState, api) => {
  return api.changeFavoriteOffer(id, status)
    .then((response) => {
      const offer = adaptOfferToClient(response);
      const state = getState();
      const offers = OffersSelector.getOffersMap(state);
      const favorites = OffersSelector.getFavoritesOffersMap(state);

      if (offer.isFavorite) {
        favorites[offer.id] = offer;
      } else {
        delete favorites[offer.id];
      }

      offers[offer.id] = offer;
      dispatch(OffersAction.setOffers(offers));
      dispatch(OffersAction.setFavoritesOffers(favorites));
    });
};
