import {getUserStatus, getUser, getError} from './user-selectors';
import {user} from '../../../mocks/users';
import store from '../../../mocks/store';
import {UserStatus} from '../../../constants/const';


const USER_STATUS = UserStatus.NO_AUTH;
const ERROR = `ERROR`;

describe(`Testing User selectors`, () => {
  it(`Testing action: getUserStatus`, () => {
    expect(getUserStatus(store)).toBe(USER_STATUS);
  });

  it(`Testing action: getUser`, () => {
    expect(getUser(store)).toMatchObject(user);
  });

  it(`Testing action: getError`, () => {
    expect(getError(store)).toBe(ERROR);
  });
});
