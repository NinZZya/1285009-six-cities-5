import {CITIES} from '../const';
import {
  getRandomArr,
  getRandomArrValue,
  getRandomBool,
  getRandomInt,
} from './randomaizer';

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
  1: [
    [48.8588336, 2.2457026],
    [48.884716, 2.339014],
    [48.8727168, 2.3359014],
    [48.8560346, 2.3181479],
    [48.8553232, 2.3522368],
    [48.8728688, 2.3559089],
    [48.8628688, 2.3359089],
  ],
  2: [
    [50.9422757, 6.9500156],
    [50.947828, 6.9184057],
    [50.9435302, 6.9600436],
    [50.9468833, 6.9609954],
    [50.9396526, 6.941616],
    [50.9386526, 6.917616],
  ],
  3: [
    [50.8488746, 4.3506942],
    [50.8559434, 4.3672311],
    [50.8513309, 4.3515856],
    [50.8414535, 4.3618321],
    [50.8434535, 4.3518321],
  ],
  4: [
    [52.3909553943508, 4.85309666406198],
    [52.369553943508, 4.85309666406198],
    [52.3909553943508, 4.929309666406198],
    [52.3809553943508, 4.939309666406198],
  ],
};

const TYPES = [`Apartment`, `Private room`];

const cities = Object.keys(CITIES).slice(0, length - 2);

let reviewId = 0;

const generateDate = () => {
  const year = getRandomInt(2018, 2020);
  const month = String(getRandomInt(1, 12)).padStart(2, `0`);
  const day = String(getRandomInt(1, 28)).padStart(2, `0`);
  return `${year}-${month}-${day}`;
};

const generateReview = () => {
  const user = getRandomArrValue(USERS);

  return {
    id: reviewId++,
    user,
    date: generateDate(),
    rate: getRandomInt(0, 5),
    text: getRandomArr(DESCRIPTIONS, getRandomInt(1, DESCRIPTIONS.length)).join(`/n`),
  };
};

const generateReviews = (count) => new Array(count).fill(``).map(generateReview);


const generateOffer = (cityId, id) => {
  const coords = getRandomArr(OFFERS_COORDS[cityId]);

  return coords.map((coord, index) => {
    const host = getRandomArrValue(USERS);

    return {
      id: id * 100 + index,
      city: CITIES[cityId],
      title: getRandomArrValue(TITLES),
      type: getRandomArrValue(TYPES),
      price: getRandomInt(20, 500),
      rate: getRandomInt(0, 5),
      bedroomsCount: getRandomInt(1, 3),
      adultsCount: getRandomInt(1, 4),
      features: getRandomArr(FEATURES, getRandomInt(0, FEATURES.length)),
      host: {
        name: host.name,
        avatar: host.avatar,
        isPro: getRandomBool(),
      },
      images: getRandomArr(IMAGES, getRandomInt(1, IMAGES.length)),
      description: getRandomArr(DESCRIPTIONS, getRandomInt(1, DESCRIPTIONS.length)).join(`/n`),
      reviews: generateReviews(getRandomInt(1, 5)),
      isPremium: getRandomBool(),
      isFavorite: getRandomBool(),
      coords: {
        latitude: coord[0],
        longitude: coord[1],
      },
    };
  });
};

export default () => cities.map(generateOffer).reduce((offers, item) => [...offers, ...item], []);
