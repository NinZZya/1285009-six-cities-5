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
  `/img/studio-01.jpg`,
];

const USERS = [
  {id: 1, name: `Max`, avatar: `/img/avatar-max.jpg`},
  {id: 2, name: `Angelina`, avatar: `/img/avatar-angelina.jpg`},
  {id: 3, name: `John`, avatar: `/img/avatar.svg`},
  {id: 4, name: `Ann`, avatar: `/img/avatar.svg`},
];

const TYPES = [`Apartment`, `Private room`];

const cities = Object.values(CITIES).slice(0, length - 2);

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


const generateOffer = (_, id) => {
  const host = getRandomArrValue(USERS);

  return {
    id,
    city: getRandomArrValue(cities),
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
  };
};

export default (count) => new Array(count).fill(``).map(generateOffer);
