import {
  number,
  shape,
  oneOf,
  func,
  arrayOf,
  string,
  bool,
  object,
} from 'prop-types';
import {SortType, LoadStatus, UserStatus} from './const';


const LIST_SORTS = Object.values(SortType);
const LIST_LOAD_STATUS = Object.values(LoadStatus);
const LIST_USER_STATUS = Object.values(UserStatus);

const LIST_CITIES = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`,
];

const STAR_TITLES = [
  `perfect`,
  `good`,
  `not bad`,
  `badly`,
  `terribly`,
];


export const ID = number;
export const PATH = string;
export const EXACT = bool;
export const CHILDREN = object;
export const FUNCTION = func;
export const CLASS_NAME = string;
export const OFFERS_STATUS = oneOf(LIST_LOAD_STATUS);
export const USER_STATUS = oneOf(LIST_USER_STATUS);
export const USER_ERROR = string;
export const MESSAGE_TITLE = string;
export const MESSAGE_TEXT = string;

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

export const RATE = number;

export const USER = shape({
  id: number,
  name: string,
  email: string,
});

export const REVIEW = shape({
  id: ID,
  user: OFFER_USER,
  date: string,
  rate: RATE,
  text: string,
});

export const REVIEWS = arrayOf(REVIEW);

export const OFFER_USER = shape({
  id: ID,
  name: string,
  avatar: string,
});

export const OFFER_IMAGE = string;
export const OFFER_TITLE = string;
export const OFFER_TYPE = string;
export const OFFER_PRICE = number;
export const OFFER_BEDROOMS_COUNT = number;
export const OFFER_ADULTS_COUNT = number;
export const OFFER_FEATURES = arrayOf(string);
export const OFFER_IMAGES = arrayOf(OFFER_IMAGE);
export const OFFER_DESCRIPTION = string;
export const OFFER_IS_PREMIUM = bool;
export const OFFER_IS_FAVORITE = bool;

export const OFFER_HOST = shape({
  name: string,
  avatar: string,
  isPro: bool,
});

export const OFFER = shape({
  id: ID,
  city: CITY,
  title: OFFER_TITLE,
  type: OFFER_TYPE,
  price: OFFER_PRICE,
  rate: RATE,
  bedroomsCount: OFFER_BEDROOMS_COUNT,
  adultsCount: OFFER_ADULTS_COUNT,
  features: OFFER_FEATURES,
  host: OFFER_HOST,
  images: OFFER_IMAGES,
  description: OFFER_DESCRIPTION,
  reviews: REVIEWS,
  isPremium: OFFER_IS_PREMIUM,
  isFavorite: OFFER_IS_FAVORITE,
});

export const LIST_OFFERS = arrayOf(OFFER);
