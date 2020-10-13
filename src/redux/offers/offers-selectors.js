import {createSelector} from 'reselect';
import NameSpace from '../name-space';
import {SortOffers} from '../../utils/utils';


const OFFERS_SPACE = NameSpace.OFFERS;


export const getOffersStatus = (state) => state[OFFERS_SPACE].status;

export const getActiveCityId = (state) => state[OFFERS_SPACE].activeCityId;

export const getOffersSortType = (state) => state[OFFERS_SPACE].sortType;

export const getOffers = (state) => Object.values(state[OFFERS_SPACE].offers);

export const getOffer = (state, offerId) => state[OFFERS_SPACE].offers[offerId];

export const getSortedCityOffers = createSelector(
    getOffers,
    getActiveCityId,
    getOffersSortType,
    (offers, cityId, sortType) => {
      const cityOffers = offers
        .filter((offer) => offer.city.id === cityId);
      return SortOffers[sortType](cityOffers);
    }
);

export const getFavoritesOffers = createSelector(
    getOffers,
    (offers) => {
      return offers.reduce((favorites, offer) => {
        if (offer.isFavorite) {
          if (favorites[offer.city.name]) {
            favorites[offer.city.id].push(offer);
          } else {
            favorites[offer.city.id] = [offer];
          }
        }

        return favorites;
      }, {});
    }
);
