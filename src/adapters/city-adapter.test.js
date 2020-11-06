import {adaptCityToClient} from './city-adapter';

const SERVER = {
  'location': {
    'latitude': 52.38333,
    'longitude': 4.9,
    'zoom': 10
  },
  'name': `Amsterdam`,
};

const CLIENT = {
  id: 4,
  name: `Amsterdam`,
  coords: [52.38333, 4.9],
  zoom: 10,
};

it(`Testing adaptCityToClient`, () => {
  expect(adaptCityToClient(SERVER)).toMatchObject(CLIENT);
});
