import * as OffersAction from './offers-actions';
import {LoadStatus} from '../../const';


export const loadOffersAsync = () => (dispatch, getOffers, api) => {
  return api.getOffers()
    .then((response) => {
      if (!response.length) {
        dispatch(OffersAction.setOffers({}));
      }

      const offers = api.adaptOffersToClient(response);
      dispatch(OffersAction.setOffers(offers));
      dispatch(OffersAction.changeOffersStatus(LoadStatus.SUCCESS));
    });
};
