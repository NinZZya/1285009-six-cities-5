import MockAdapter from 'axios-mock-adapter';
import * as UserType from './user-types';
import {authAsync, checkAuthAsync} from './user-operations';
import Api, {ApiRoute} from '../../../services/api';
import {serverUser} from '../../../mocks/server-data';
import {user} from '../../../mocks/users';
import {UserStatus} from '../../../constants/const';


const api = new Api(() => {});

describe(`Testing User operation`, () => {
  it(`Testing action: authAsync`, () => {
    const apiMock = new MockAdapter(api.getApi());
    apiMock
      .onPost(ApiRoute.LOGIN)
      .reply(200, serverUser);

    const dispatch = jest.fn();
    const fakeUser = {login: `test@test.ru`, password: `123456`};
    const auth = authAsync(fakeUser);

    return auth(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: UserType.SET_USER,
          payload: user,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: UserType.CHANGE_USER_STATUS,
          payload: UserStatus.AUTH,
        });
        expect(dispatch).toHaveBeenCalledTimes(3);
      });
  });

  it(`Testing action: checkAuthAsync`, () => {
    const apiMock = new MockAdapter(api.getApi());
    apiMock
      .onGet(ApiRoute.LOGIN)
      .reply(200, serverUser);

    const dispatch = jest.fn();
    const checkAuth = checkAuthAsync();

    return checkAuth(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: UserType.SET_USER,
          payload: user,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: UserType.CHANGE_USER_STATUS,
          payload: UserStatus.AUTH,
        });
        expect(dispatch).toHaveBeenCalledTimes(3);
      });
  });
});
