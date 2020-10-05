import PropTypes from 'prop-types';

const {number, shape, oneOf, func, array} = PropTypes;

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

export const CITIES = shape({
  id: CITY,
});


export const OFFERS = array;

export const STAR = shape({
  value: number,
  title: oneOf(STAR_TITLES),
});

export const FUNCTION = func;
