import PropTypes from 'prop-types';

const CITIES = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`,
];

export const TCityId = PropTypes.number;
export const TCity = PropTypes.shape({
  id: TCityId,
  name: PropTypes.oneOf(CITIES),
});
