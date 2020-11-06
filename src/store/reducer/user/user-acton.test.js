import * as UserType from './user-types';
import {changeUserStatus, setUser, setError} from './user-actions';
import {user} from '../../../mocks/users';
import {UserStatus} from '../../../constants/const';


const USER_STATUS = UserStatus.AUTH;
const ERROR = `ERROR`;

describe(`Testing User actions`, () => {
  it(`Testing action: changeUserStatus`, () => {
    expect(changeUserStatus(USER_STATUS)).toMatchObject({
      type: UserType.CHANGE_USER_STATUS,
      payload: USER_STATUS,
    });
  });

  it(`Testing action: setUser`, () => {
    expect(setUser(user)).toMatchObject({
      type: UserType.SET_USER,
      payload: user,
    });
  });

  it(`Testing action: setError`, () => {
    expect(setError(ERROR)).toMatchObject({
      type: UserType.SET_ERROR,
      payload: ERROR,
    });
  });
});
