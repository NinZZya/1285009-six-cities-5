import {
  getRandomArr,
  getRandomArrValue,
  getRandomInt,
} from './randomaizer';

const DESCRIPTIONS = [
  `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
];

const USERS = [
  {id: 1, name: `Max`, avatar: `/img/avatar-max.jpg`},
  {id: 2, name: `Angelina`, avatar: `/img/avatar-angelina.jpg`},
  {id: 3, name: `John`, avatar: `/img/avatar.svg`},
  {id: 4, name: `Ann`, avatar: `/img/avatar.svg`},
];

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

const generateReviews = (offers) => offers.reduce((reviews, offer) => {
  reviews[offer.id] = new Array(getRandomInt(0, 5)).fill(``).map(generateReview);
  return reviews;
}, {});

export default generateReviews;
