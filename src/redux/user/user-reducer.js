import * as UserType from './user-types';
import {UserStatus} from '../../const';


const initialState = {
  status: UserStatus.NO_AUTH,
  user: {},
  error: ``,
};


export default (state = initialState, action) => {
  switch (action.type) {
    case UserType.CHANGE_USER_STATUS:
      return Object.assign({}, state, {
        status: action.payload,
      });
    case UserType.SET_USER:
      return Object.assign({}, state, {
        user: action.payload,
      });
    case UserType.SET_ERROR:
      return Object.assign({}, state, {
        error: action.payload,
      });
    default:
      return state;
  }
};

