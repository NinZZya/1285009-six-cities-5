import {changeUserStatus, setUser, setError} from './user-actions';
import {loadFavoritesOffersAsync} from '@/reducer/offers/offers-operations';
import {UserStatus} from '@/const';


export const authAsync = (authData) => (dispatch, getState, api) => {
  return api.auth(authData)
    .then((user) => {
      dispatch(setUser(user));
      dispatch(changeUserStatus(UserStatus.AUTH));
      dispatch(loadFavoritesOffersAsync());
    })
    .catch((error) => {
      dispatch(setError(error.message));
      dispatch(changeUserStatus(UserStatus.AUTH_ERROR));
    });
};

export const checkAuthAsync = () => (dispatch, getState, api) => {
  return api.checkAuth()
    .then((user) => {
      dispatch(setUser(user));
      dispatch(changeUserStatus(UserStatus.AUTH));
      dispatch(loadFavoritesOffersAsync());
    });
};
