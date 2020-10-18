import * as OffersAction from './offers-actions';
import * as CitiesAction from '../cities/cities-actions';
import {adaptOffersDataToClient} from '../../adapters/offers-adapter';
import {DataStatus} from '../../const';


export const loadOffersAsync = () => (dispatch, getState, api) => {
  return api.getOffers()
    .then((response) => {
      if (response.length) {
        const adaptData = adaptOffersDataToClient(response);
        const {offers, cities} = adaptData;
        dispatch(CitiesAction.updateCities(cities));
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
