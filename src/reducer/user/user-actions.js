import * as UserType from './user-types';
import {makeActionCreator} from '@/utils/utils';


export const changeUserStatus = makeActionCreator(UserType.CHANGE_USER_STATUS);
export const setUser = makeActionCreator(UserType.SET_USER);
export const setError = makeActionCreator(UserType.SET_ERROR);
