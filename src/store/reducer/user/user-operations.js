import {changeUserStatus, setUser, setError} from './user-actions';
import {loadFavoritesOffersAsync} from '../offers/offers-operations';
import {UserStatus} from '../../../constants/const';
import {adaptUser} from '../../../adapters/user-adapter';


export const authAsync = (authData) => (dispatch, getState, api) => {
  return api.auth(authData)
    .then((response) => {
      const user = adaptUser(response);
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
    .then((response) => {
      const user = adaptUser(response);
      dispatch(setUser(user));
      dispatch(changeUserStatus(UserStatus.AUTH));
      dispatch(loadFavoritesOffersAsync());
    });
};
