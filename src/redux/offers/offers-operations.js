import * as OffersAction from './offers-actions';
import {DataStatus} from '../../const';


export const loadOffersAsync = () => (dispatch, getState, api) => {
  return api.getOffers()
    .then((response) => {
      const offers = response.length ?
        api.adaptOffersToClient(response) :
        {};

      dispatch(OffersAction.setOffers(offers));
      dispatch(OffersAction.changeOffersStatus(DataStatus.SUCCESS));
    })
    .catch(() => {
      dispatch(OffersAction.changeOffersStatus(DataStatus.ERROR));
    });
};
