import {changeUserStatus, setUser, setError} from './user-actions';
import {UserStatus} from '../../const';


export const authUserAsync = (authData) => (dispatch, auth, api) => {
  return api.auth(authData)
    .then((user) => {
      dispatch(setUser(user));
      dispatch(changeUserStatus(UserStatus.AUTH));
    })
    .catch((error) => {
      dispatch(setError(error.message));
      dispatch(changeUserStatus(UserStatus.AUTH_ERROR));
    });
};
