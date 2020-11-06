import * as UserType from './user-types';
import userReducer, {initialState} from './user-reducer';
import {UserStatus} from '../../../constants/const';
import {user} from '../../../mocks/users';


const USER_STATUS = UserStatus.AUTH;
const ERROR = `ERROR`;

const SET_USER_STATUS_ACTION = {
  type: UserType.CHANGE_USER_STATUS,
  payload: USER_STATUS,
};

const SET_USER_ACTION = {
  type: UserType.SET_USER,
  payload: user,
};

const SET_ERROR_ACTION = {
  type: UserType.SET_ERROR,
  payload: ERROR,
};

describe(`Testing User reducer`, () => {
  it(`Testing initialState`, () => {
    expect(
        userReducer(void 0, {type: ``})
    ).toMatchObject(initialState);
  });

  it(`Testing SET_USER_STATUS_ACTION = ${SET_USER_STATUS_ACTION}`, () => {
    expect(
        userReducer({}, SET_USER_STATUS_ACTION)
    ).toMatchObject({
      status: USER_STATUS,
    });
  });

  it(`Testing SET_USER_ACTION = ${SET_USER_ACTION}`, () => {
    expect(
        userReducer({}, SET_USER_ACTION)
    ).toMatchObject({
      user,
    });
  });

  it(`Testing SET_ERROR_ACTION = ${SET_ERROR_ACTION}`, () => {
    expect(
        userReducer({}, SET_ERROR_ACTION)
    ).toMatchObject({
      error: ERROR,
    });
  });
});
