import {
  number,
  shape,
  oneOf,
  func,
  arrayOf,
  string,
  bool,
  array,
  object,
  oneOfType,
} from 'prop-types';
import {SortType, DataStatus, UserStatus} from './const';

// Data for types

const LIST_SORTS = Object.values(SortType);
const LIST_DATA_STATUS = Object.values(DataStatus);
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


// General types

export const ID = number;
export const PATH = string;
export const TYPE_NAME = string;
export const FLAG = bool;
export const EXACT = bool;
export const CHILDREN = oneOfType([array, object]).isRequired;
export const FUNCTION = func;
export const CLASS_NAME = string;
export const DATA_STATUS = oneOf(LIST_DATA_STATUS);
export const USER_STATUS = oneOf(LIST_USER_STATUS);
export const USER_ERROR = string;
export const MESSAGE_TITLE = string;
export const MESSAGE_TEXT = string;
export const COORDS = arrayOf(number);

export const MATCH = shape({
  path: string,
  params: shape({
    cityId: string,
    offerId: string,
  }),
});


// City types

export const CITY_NAME = oneOf(LIST_CITIES);
export const CITY = shape({
  id: ID,
  name: CITY_NAME,
  zoom: number,
  coords: COORDS,
});

export const CITIES = shape({
  [number]: arrayOf(CITY),
});
// Offer types

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

export const FORM = object;

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
export const OFFER_FEATURE_VAUE = oneOfType([
  OFFER_ADULTS_COUNT,
  OFFER_BEDROOMS_COUNT,
  OFFER_TYPE,
]);

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
  previewImage: string,
  images: OFFER_IMAGES,
  description: OFFER_DESCRIPTION,
  isPremium: OFFER_IS_PREMIUM,
  isFavorite: OFFER_IS_FAVORITE,
  coords: COORDS,
});

export const FAVORITES_OFFERS = shape({
  [string]: arrayOf(OFFER),
});

export const LIST_OFFERS = arrayOf(OFFER);

// Map types

export const MAP_CENTER = shape({
  coords: COORDS,
  zoom: number,
});

export const MAP_PINS = LIST_OFFERS;
