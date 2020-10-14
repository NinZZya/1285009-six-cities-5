import NameSpace from '../name-space';


const REVIEWS_SPACE = NameSpace.REVIEWS;


export const getReviewsStatus = (state) => state[REVIEWS_SPACE].status;
export const getReviews = (state) => state[REVIEWS_SPACE].reviews;

