import {adaptUser} from './user-adapter';

const SERVER = {
  'id': 1,
  'avatar_url': `img/1.png`,
  'email': `Oliver.conner@gmail.com`,
  'is_pro': false,
  'name': `Oliver.conner`,
};

const CLIENT = {
  id: 1,
  avatar: `img/1.png`,
  email: `Oliver.conner@gmail.com`,
  isPro: false,
  name: `Oliver.conner`,
};

it(`Testing adaptUser`, () => {
  expect(adaptUser(SERVER)).toMatchObject(CLIENT);
});
