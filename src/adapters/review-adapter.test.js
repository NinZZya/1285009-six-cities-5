import {adaptReviewToServer, adaptReviewToClent, adaptReviewsToClent} from './review-adapter';

const SERVER = {
  'id': 0,
  'user': {
    'id': 3,
    'name': `John`,
    'avatar_url': `/img/avatar.svg`,
    'is_pro': true,
  },
  'date': `2019-11-26`,
  'rating': 2,
  'comment': `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
};

const CLIENT = {
  id: 0,
  user: {
    id: 3,
    name: `John`,
    avatar: `/img/avatar.svg`,
    isPro: true,
  },
  date: new Date(`2019-11-26`),
  rate: 2,
  text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
};

const CLIENT_TO_SERVER = {
  rating: 2,
  comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
};

it(`Testing adaptReviewToServer`, () => {
  expect(adaptReviewToServer(CLIENT)).toMatchObject(CLIENT_TO_SERVER);
});

it(`Testing adaptReviewToClent`, () => {
  expect(adaptReviewToClent(SERVER)).toMatchObject(CLIENT);
});

it(`Testing adaptReviewsToClent`, () => {
  expect(adaptReviewsToClent([SERVER, SERVER])).toEqual([CLIENT, CLIENT]);
});
