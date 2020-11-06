import {extend} from '../utils/utils';

const offers = [
  {
    id: 0,
    city: {
      id: 4,
      name: `Amsterdam`,
      coords: [52.38333, 4.9],
      zoom: 10,
    },
    title: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    price: 120,
    rate: 4,
    bedroomsCount: 3,
    adultsCount: 3,
    features: [
      `Dishwasher`,
      `Baby seat`,
    ],
    host: {
      name: `Angelina`,
      avatar: `/img/avatar-angelina.jpg`,
      isPro: true,
    },
    previewImage: `/img/apartment-01.jpg`,
    images: [
      `/img/apartment-03.jpg`,
      `/img/apartment-02.jpg`,
    ],
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    isPremium: true,
    isFavorite: false,
    zoom: 8,
    coords: [
      52.35514938496378,
      4.673877537499948,
    ],
  },
  {
    id: 1,
    city: {
      id: 4,
      name: `Amsterdam`,
      coords: [52.38333, 4.9],
      zoom: 10,
    },
    title: `Wood and stone place`,
    type: `Private room`,
    price: 80,
    rate: 3,
    bedroomsCount: 1,
    adultsCount: 3,
    features: [
      `Dishwasher`,
      `Towels`,
      `Fridge`,
      `Heating`,
      `Washing machine`,
      `Wi-Fi`,
      `Coffee machine`,
    ],
    host: {
      name: `John`,
      avatar: `/img/avatar.svg`,
      isPro: false,
    },
    previewImage: `/img/room.jpg`,
    images: [
      `/img/apartment-01.jpg`,
      `/img/apartment-02.jpg`,
    ],
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    isPremium: false,
    isFavorite: true,
    zoom: 8,
    coords: [
      52.35514938496378,
      4.673877537499948,
    ],
  },
  {
    id: 2,
    city: {
      id: 4,
      name: `Amsterdam`,
      coords: [52.38333, 4.9],
      zoom: 10,
    },
    title: `Canal View Prinsengracht`,
    type: `Apartment`,
    price: 132,
    rate: 4,
    bedroomsCount: 1,
    adultsCount: 1,
    features: [
      `Fridge`,
      `Towels`,
    ],
    host: {
      name: `Angelina`,
      avatar: `/img/avatar-angelina.jpg`,
      isPro: true,
    },
    previewImage: `/img/apartment-02.jpg`,
    images: [
      `/img/room.jpg`,
      `/img/apartment-02.jpg`,
      `/img/apartment-03.jpg`,
    ],
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    isPremium: false,
    isFavorite: true,
    zoom: 8,
    coords: [
      52.35514938496378,
      4.673877537499948,
    ],
  },
  {
    id: 3,
    city: {
      id: 4,
      name: `Amsterdam`,
      coords: [52.38333, 4.9],
      zoom: 10,
    },
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    price: 180,
    rate: 5,
    bedroomsCount: 2,
    adultsCount: 1,
    features: [],
    host: {
      name: `Angelina`,
      avatar: `/img/avatar-angelina.jpg`,
      isPro: true,
    },
    previewImage: `/img/apartment-03.jpg`,
    images: [
      `/img/apartment-01.jpg`
    ],
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    isPremium: false,
    isFavorite: false,
    zoom: 8,
    coords: [
      52.35514938496378,
      4.673877537499948,
    ],
  },
  {
    id: 4,
    city: {
      id: 4,
      name: `Amsterdam`,
      coords: [52.38333, 4.9],
      zoom: 10,
    },
    title: `Wood and stone place`,
    type: `Apartment`,
    price: 180,
    rate: 5,
    bedroomsCount: 2,
    adultsCount: 1,
    features: [],
    host: {
      name: `Angelina`,
      avatar: `/img/avatar-angelina.jpg`,
      isPro: true,
    },
    previewImage: `/img/room.jpg`,
    images: [
      `/img/apartment-01.jpg`
    ],
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    isPremium: false,
    isFavorite: false,
    zoom: 8,
    coords: [
      52.35514938496378,
      4.673877537499948,
    ],
  },
];

export const favoritesOffers = offers.reduce((favorites, offer) => {
  if (favorites[offer.city.name]) {
    favorites[offer.city.name].push(offer);
  } else {
    favorites[offer.city.name] = [offer];
  }

  return favorites;
}, {});

export const offersMap = offers.reduce((map, offer) => {
  map[offer.id] = offer;
  return map;
}, {});

export const sortedFromHightToLowOffers = [
  offers[3],
  offers[4],
  offers[2],
  offers[0],
  offers[1],
];

export const sortedFromLowToHightOffers = [
  offers[1],
  offers[0],
  offers[2],
  offers[3],
  offers[4],
];
export const sortedByRateOffers = [
  offers[3],
  offers[4],
  offers[0],
  offers[2],
  offers[1],
];

export const clientOffers = offers.reduce((map, offer) => {
  const clientOffer = extend(offer);
  clientOffer.isFavorite = false;
  map[clientOffer.id] = clientOffer;
  return map;
}, {});

export const clientFavoriteOffers = offers.reduce((map, offer) => {
  if (offer.isFavorite) {
    map[offer.id] = offer;
  }

  return map;
}, {});

export default offers;
