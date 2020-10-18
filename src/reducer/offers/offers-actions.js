import * as OffersType from './offers-types';
import {makeActionCreator} from '../../utils/utils';


export const changeOffersStatus = makeActionCreator(OffersType.CHANGE_OFFERS_STATUS);
export const setOffers = makeActionCreator(OffersType.SET_OFFERS);
export const changeOffersSortType = makeActionCreator(OffersType.CHANGE_OFFERS_SORT_TYPE);
