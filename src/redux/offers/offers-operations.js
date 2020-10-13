import * as OffersAction from './offers-actions';
import {LoadStatus} from '../../const';


export const loadOffersAsync = () => (dispatch, getOffers, api) => {
  return api.getOffers()
    .then((response) => {
      const offers = response.length ?
        api.adaptOffersToClient(response) :
        {};

      dispatch(OffersAction.setOffers(offers));
      dispatch(OffersAction.changeOffersStatus(LoadStatus.SUCCESS));
    });
};

export const loadOfferReviewsAsync = (id) => (dispatch, getComments, api) => {
  return api.getReviews(id)
    .then((response) => {
      const reviews = response ? response : [];

      dispatch(OffersAction.setOfferReviews(reviews));
      dispatch(OffersAction.changeOfferReviewsStatus(LoadStatus.SUCCESS));
    });
};
