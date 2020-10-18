import {
  getRandomArr,
  getRandomArrValue,
  getRandomBool,
  getRandomInt,
} from './randomaizer';

export const CITIES = [
  {name: `Paris`, location: {latitude: 48.85661, longitude: 2.351499, zoom: 13}},
  {name: `Cologne`, location: {latitude: 50.938361, longitude: 6.959974, zoom: 13}},
  {name: `Brussels`, location: {latitude: 50.846557, longitude: 4.351697, zoom: 13}},
  {name: `Amsterdam`, location: {latitude: 52.37454, longitude: 4.897976, zoom: 13}},
  {name: `Hamburg`},
  {name: `Dusseldorf`},
];

const TITLES = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`,
];

const FEATURES = [
  `Wi-Fi`,
  `Washing machine`,
  `Towels`,
  `Heating`,
  `Coffee machine`,
  `Baby seat`,
  `Kitchen`,
  `Dishwasher`,
  `Cabel TV`,
  `Fridge`,
];

const DESCRIPTIONS = [
  `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
];

const IMAGES = [
  `/img/apartment-01.jpg`,
  `/img/apartment-02.jpg`,
  `/img/apartment-03.jpg`,
  `/img/room.jpg`,
];

const USERS = [
  {id: 1, name: `Max`, avatar: `/img/avatar-max.jpg`},
  {id: 2, name: `Angelina`, avatar: `/img/avatar-angelina.jpg`},
  {id: 3, name: `John`, avatar: `/img/avatar.svg`},
  {id: 4, name: `Ann`, avatar: `/img/avatar.svg`},
];

const OFFERS_COORDS = {
  'Paris': [
    {latitude: 48.8588336, longitude: 2.3357026},
    {latitude: 48.884716, longitude: 2.339014},
    {latitude: 48.8727168, longitude: 2.3359014},
    {latitude: 48.8560346, longitude: 2.3181479},
    {latitude: 48.8553232, longitude: 2.3522368},
    {latitude: 48.8728688, longitude: 2.3559089},
    {latitude: 48.8628688, longitude: 2.3359089},
  ],
  'Cologne': [
    {latitude: 50.9422757, longitude: 6.9500156},
    {latitude: 50.947828, longitude: 6.9184057},
    {latitude: 50.9435302, longitude: 6.9600436},
    {latitude: 50.9468833, longitude: 6.9609954},
    {latitude: 50.9396526, longitude: 6.941616},
    {latitude: 50.9386526, longitude: 6.917616},
  ],
  'Brussels': [
    {latitude: 50.8488746, longitude: 4.3506942},
    {latitude: 50.8559434, longitude: 4.3672311},
    {latitude: 50.8513309, longitude: 4.3515856},
    {latitude: 50.8414535, longitude: 4.3618321},
    {latitude: 50.8434535, longitude: 4.3518321},
  ],
  'Amsterdam': [
    {latitude: 52.3909553943508, longitude: 4.85309666406198},
    {latitude: 52.369553943508, longitude: 4.85309666406198},
    {latitude: 52.3909553943508, longitude: 4.929309666406198},
    {latitude: 52.3809553943508, longitude: 4.939309666406198},
  ],
};

const TYPES = [`Apartment`, `Private room`];

const cities = CITIES.slice(0, length - 2);

const generateOffer = (city, id) => {
  const coords = getRandomArr(OFFERS_COORDS[city.name]);

  return coords.map((coord, index) => {
    const host = getRandomArrValue(USERS);

    return {
      'id': id * 100 + index,
      city,
      'title': getRandomArrValue(TITLES),
      'type': getRandomArrValue(TYPES),
      'price': getRandomInt(20, 500),
      'rating': getRandomInt(1, 5),
      'bedrooms': getRandomInt(1, 3),
      'max_adults': getRandomInt(1, 4),
      'goods': getRandomArr(FEATURES, getRandomInt(0, FEATURES.length)),
      'host': {
        'id': host.id,
        'name': host.name,
        'avatar_url': host.avatar,
        'is_pro': getRandomBool(),
      },
      'preview_image': getRandomArr(IMAGES, getRandomInt(1, IMAGES.length))[0],
      'images': getRandomArr(IMAGES, getRandomInt(1, IMAGES.length)),
      'description': getRandomArr(DESCRIPTIONS, getRandomInt(1, DESCRIPTIONS.length)).join(`/n`),
      'is_premium': getRandomBool(),
      'is_favorite': getRandomBool(),
      'location': coord,
    };
  });
};

export default () => cities.map(generateOffer).reduce((offers, item) => [...offers, ...item], []);
