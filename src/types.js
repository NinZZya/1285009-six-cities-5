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

export const id = number;
export const city = shape({
  id,
  name: oneOf(CITIES),
});

export const star = shape({
  value: number,
  title: oneOf(STAR_TITLES),
});
