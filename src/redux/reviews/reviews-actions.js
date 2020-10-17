import * as ReviewsType from './reviews-types';
import {makeActionCreator} from '../../utils/utils';


export const changeReviewsStatus = makeActionCreator(ReviewsType.CHANGE_REVIEWS_STATUS);
export const setReviews = makeActionCreator(ReviewsType.SET_REVIEWS);
