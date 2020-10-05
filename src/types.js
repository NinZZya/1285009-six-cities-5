import {
  number,
  shape,
  oneOf,
  func,
  arrayOf,
  string,
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

export const OFFER = string;

export const OFFERS = arrayOf(OFFER);

export const STAR = shape({
  value: number,
  title: oneOf(STAR_TITLES),
});

export const SORT = oneOf(LIST_SORTS);

export const SORTS = arrayOf(SORT);

export const FUNCTION = func;

export const CLASS_NAME = string;
