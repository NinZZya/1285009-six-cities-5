export const DEFAULT_CITY_ID = 1;
export const MAX_RATE = 5;
export const LOADING_MESSAGE = `Loading data ...`;

export const AppPath = {
  ROOT: `/`,
  LOGIN: `/login`,
  CITY: `/city`,
  OFFER: `/offer`,
  FAVORITES: `/favorites`,
  NOT_FOUND: `/not-found`,
};

export const IdName = {
  CITY: `cityId`,
  OFFER: `offerId`,
};

export const CITIES = {
  1: {
    id: 1,
    name: `Paris`,
    coords: {latitude: 48.864716, longitude: 2.349014},
  },
  2: {
    id: 2,
    name: `Cologne`,
    coords: {latitude: 50.9415491, longitude: 6.9408247},
  },
  3: {
    id: 3,
    name:
    `Brussels`,
    coords: {latitude: 50.8503396, longitude: 4.3517103},
  },
  4: {
    id: 4,
    name: `Amsterdam`,
    coords: {latitude: 52.38333, longitude: 4.9},
  },
  5: {id: 5, name: `Hamburg`},
  6: {id: 6, name: `Dusseldorf`},
};

export const SortType = {
  POPULAR: `Popular`,
  LOW_TO_HIGH: `Price: low to high`,
  HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`,
};

export const STARS = [
  {value: 5, title: `perfect`},
  {value: 4, title: `good`},
  {value: 3, title: `not bad`},
  {value: 2, title: `badly`},
  {value: 1, title: `terribly`},
];

export const LoadStatus = {
  LOADING: `LOADING`,
  SUCCESS: `SUCCESS`,
  ERROR: `ERROR`,
};

export const UserStatus = {
  NO_AUTH: `NO_AUTH`,
  RESPONSE: `RESPONSE`,
  AUTH: `AUTH`,
  AUTH_ERROR: `AUTH_ERROR`,
};

export const EMPTY_POSTFIX = `-empty`;

export const DEFAULT_AVATAR = `/img/avatar.svg`;
