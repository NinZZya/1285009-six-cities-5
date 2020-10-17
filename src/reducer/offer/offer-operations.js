import * as OfferAction from './offer-actions';
import {DataStatus} from '../../const';


export const loadOfferReviewsAsync = (id) => (dispatch, getState, api) => {
  dispatch(OfferAction.changeOfferReviewsStatus(DataStatus.LOADING));
  return api.getReviews(id)
    .then((response) => {
      const reviews = response ? response : [];

      dispatch(OfferAction.setOfferReviews(reviews));
      dispatch(OfferAction.changeOfferReviewsStatus(DataStatus.SUCCESS));
    });
};

export const addOfferReviewAsync = (id, data) => (dispatch, getState, api) => {
  dispatch(OfferAction.changeOfferReviewsStatus(DataStatus.SENDING));
  const review = api.adaptReviewToServer(data);
  return api.addReview(id, review)
    .then(() => {
      dispatch(OfferAction.changeOfferReviewsStatus(DataStatus.SUCCESS));
    })
    .catch(() => {
      dispatch(OfferAction.changeOfferReviewsStatus(DataStatus.ERROR));
    });
};

export const loadNearOffersAsync = (id) => (dispatch, getState, api) => {
  dispatch(OfferAction.changeNearOffersStatus(DataStatus.LOADING));
  return api.getNearOffers(id)
    .then((response) => {
      const nearOffers = response ? response : [];

      dispatch(OfferAction.setNearOffers(nearOffers));
      dispatch(OfferAction.changeNearOffersStatus(DataStatus.SUCCESS));
    });
};
