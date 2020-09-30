import PropTypes from 'prop-types';

const {number, shape, oneOf} = PropTypes;

const CITIES = [
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

export const TCityId = number;
export const TCity = shape({
  id: TCityId,
  name: oneOf(CITIES),
});

export const TStar = shape({
  value: number,
  title: oneOf(STAR_TITLES),
});
