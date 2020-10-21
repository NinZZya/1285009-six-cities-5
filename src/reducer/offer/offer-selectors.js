import NameSpace from '../name-space';


const NAME_SPACE = NameSpace.OFFER;


export const getOfferReviewsStatus = (state) => state[NAME_SPACE].reviewsStatus;
export const getOfferReviews = (state) => state[NAME_SPACE].reviews;
export const getNearOffersStatus = (state) => state[NAME_SPACE].nearOffersStatus;
export const getNearOffers = (state) => state[NAME_SPACE].nearOffers;
