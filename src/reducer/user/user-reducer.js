import * as UserType from './user-types';
import {extend} from '@/utils/utils';
import {UserStatus} from '@/const';


const initialState = {
  status: UserStatus.NO_AUTH,
  user: {},
  error: ``,
};


export default (state = initialState, action) => {
  switch (action.type) {
    case UserType.CHANGE_USER_STATUS:
      return extend(state, {
        status: action.payload,
      });
    case UserType.SET_USER:
      return extend(state, {
        user: action.payload,
      });
    case UserType.SET_ERROR:
      return extend(state, {
        error: action.payload,
      });
    default:
      return state;
  }
};

