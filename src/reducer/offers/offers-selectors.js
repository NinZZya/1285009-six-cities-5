import {createSelector} from 'reselect';
import NameSpace from '../name-space';
import {SortOffers} from '../../utils/utils';
import {getActiveCityId} from '../cities/cities-selectors';


const NAME_SPACE = NameSpace.OFFERS;


export const getOffersStatus = (state) => state[NAME_SPACE].status;
export const getOffersSortType = (state) => state[NAME_SPACE].sortType;
export const getOffers = (state) => Object.values(state[NAME_SPACE].offers);
export const getOffersMap = (state) => state[NAME_SPACE].offers;

export const getOfferStatus = (state) => state[NAME_SPACE].offerStatus;
export const getOffer = (state, id) => state[NAME_SPACE].offers[id];
export const getOfferReviewsStatus = (state) => state[NAME_SPACE].reviewsStatus;
export const getOfferReviews = (state) => state[NAME_SPACE].reviews;
export const getNearOffersStatus = (state) => state[NAME_SPACE].nearOffersStatus;
export const getNearOffers = (state) => state[NAME_SPACE].nearOffers;
export const getFavoritesOffersMap = (state) => state[NAME_SPACE].favorites;

export const getFavoritesOffers = (state) =>{
  const offers = Object.values(state[NAME_SPACE].favorites);
  return offers.reduce((favorites, offer) => {
    if (favorites[offer.city.name]) {
      favorites[offer.city.name].push(offer);
    } else {
      favorites[offer.city.name] = [offer];
    }

    return favorites;
  }, {});
};

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

