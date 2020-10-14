import * as ReviewsAction from './reviews-actions';
import {DataStatus} from '../../const';


export const loadReviewsAsync = (id) => (dispatch, getState, api) => {
  dispatch(ReviewsAction.changeReviewsStatus(DataStatus.LOADING));
  return api.getReviews(id)
    .then((response) => {
      const reviews = response ? response : [];

      dispatch(ReviewsAction.setReviews(reviews));
      dispatch(ReviewsAction.changeReviewsStatus(DataStatus.SUCCESS));
    });
};

export const addReviewAsync = (id, data) => (dispatch, getState, api) => {
  dispatch(ReviewsAction.changeReviewsStatus(DataStatus.SENDING));
  const review = api.adaptReviewToServer(data);
  return api.addReview(id, review)
    .then(() => {
      dispatch(ReviewsAction.changeReviewsStatus(DataStatus.SUCCESS));
    })
    .catch(() => {
      dispatch(ReviewsAction.changeReviewsStatus(DataStatus.ERROR));
    });
};
