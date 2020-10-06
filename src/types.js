import {
  number,
  shape,
  oneOf,
  func,
  arrayOf,
  string,
  bool,
} from 'prop-types';
import {SortType} from './const';


const LIST_SORTS = Object.values(SortType);

const LIST_CITIES = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`,
];

export const STAR_TITLES = [
  `perfect`,
  `good`,
  `not bad`,
  `badly`,
  `terribly`,
];

export const ID = number;

export const CITY = shape({
  id: ID,
  name: oneOf(LIST_CITIES),
});

export const STAR = shape({
  value: number,
  title: oneOf(STAR_TITLES),
});

export const SORT = oneOf(LIST_SORTS);

export const SORTS = arrayOf(SORT);

export const FUNCTION = func;

export const CLASS_NAME = string;

export const RATE = number;

export const USER = shape({
  id: ID,
  name: string,
  avatar: string,
});

export const REVIEW = shape({
  id: ID,
  user: USER,
  date: string,
  rate: RATE,
  text: string,
});

export const OFFER = shape({
  id: ID,
  city: CITY,
  title: string,
  type: string,
  price: number,
  rate: RATE,
  bedroomsCount: number,
  adultsCount: number,
  features: arrayOf(string),
  host: {
    name: string,
    avatar: string,
    isPro: bool,
  },
  images: arrayOf(string),
  description: string,
  reviews: arrayOf(REVIEW),
  isPremium: bool,
});

export const OFFERS = shape({
  [ID]: OFFER,
});

export const LIST_OFFERS = arrayOf(OFFER);
