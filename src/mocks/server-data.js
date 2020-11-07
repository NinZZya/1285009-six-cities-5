import {extend} from "../utils/utils";

export const serverUser = {
  'id': 1,
  'avatar_url': `img/1.png`,
  'email': `Oliver.conner@gmail.com`,
  'is_pro': false,
  'name': `Oliver.conner`,
};

export const serverReviews = [
  {
    'id': 0,
    'user': {
      'id': 3,
      'name': `John`,
      'avatar_url': `/img/avatar.svg`,
      'is_pro': true,
    },
    'date': `2019-11-26`,
    'rating': 2,
    'comment': `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  },
  {
    'id': 1,
    'user': {
      'id': 3,
      'name': `John`,
      'avatar_url': `/img/avatar.svg`,
      'is_pro': false,
    },
    'date': `2019-03-23`,
    'rating': 4,
    'comment': `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  }
];

export const serverOffers = [
  {
    'id': 0,
    'city': {
      'location': {
        'latitude': 52.38333,
        'longitude': 4.9,
        'zoom': 10
      },
      'name': `Amsterdam`,
    },
    'title': `Beautiful & luxurious apartment at great location`,
    'type': `apartment`,
    'price': 120,
    'rating': 4,
    'bedrooms': 3,
    'max_adults': 3,
    'goods': [
      `Dishwasher`,
      `Baby seat`,
    ],
    'host': {
      'id': 1,
      'name': `Angelina`,
      'avatar_url': `img/avatar-angelina.jpg`,
      'is_pro': true,
    },
    'preview_image': `/img/apartment-01.jpg`,
    'images': [
      `/img/apartment-03.jpg`,
      `/img/apartment-02.jpg`,
    ],
    'description': `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    'is_premium': true,
    'is_favorite': false,
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
  },
  {
    'id': 1,
    'city': {
      'location': {
        'latitude': 52.38333,
        'longitude': 4.9,
        'zoom': 10
      },
      'name': `Amsterdam`,
    },
    'title': `Wood and stone place`,
    'type': `private room`,
    'price': 80,
    'rating': 3,
    'bedrooms': 1,
    'max_adults': 3,
    'goods': [
      `Dishwasher`,
      `Towels`,
      `Fridge`,
      `Heating`,
      `Washing machine`,
      `Wi-Fi`,
      `Coffee machine`,
    ],
    'host': {
      'id': 2,
      'name': `John`,
      'avatar_url': `img/avatar.svg`,
      'is_pro': false,
    },
    'preview_image': `/img/room.jpg`,
    'images': [
      `/img/apartment-01.jpg`,
      `/img/apartment-02.jpg`,
    ],
    'description': `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    'is_premium': false,
    'is_favorite': false,
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
  },
  {
    'id': 2,
    'city': {
      'location': {
        'latitude': 52.38333,
        'longitude': 4.9,
        'zoom': 10
      },
      'name': `Amsterdam`,
    },
    'title': `Canal View Prinsengracht`,
    'type': `apartment`,
    'price': 132,
    'rating': 4,
    'bedrooms': 1,
    'max_adults': 1,
    'goods': [
      `Fridge`,
      `Towels`,
    ],
    'host': {
      'id': 1,
      'name': `Angelina`,
      'avatar_url': `img/avatar-angelina.jpg`,
      'is_pro': true,
    },
    'preview_image': `/img/apartment-02.jpg`,
    'images': [
      `/img/room.jpg`,
      `/img/apartment-02.jpg`,
      `/img/apartment-03.jpg`,
    ],
    'description': `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    'is_premium': false,
    'is_favorite': false,
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
  },
  {
    'id': 3,
    'city': {
      'location': {
        'latitude': 52.38333,
        'longitude': 4.9,
        'zoom': 10
      },
      'name': `Amsterdam`,
    },
    'title': `Nice, cozy, warm big bed apartment`,
    'type': `apartment`,
    'price': 180,
    'rating': 5,
    'bedrooms': 2,
    'max_adults': 1,
    'goods': [],
    'host': {
      'id': 1,
      'name': `Angelina`,
      'avatar_url': `img/avatar-angelina.jpg`,
      'is_pro': true,
    },
    'preview_image': `/img/apartment-03.jpg`,
    'images': [
      `/img/apartment-01.jpg`
    ],
    'description': `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    'is_premium': false,
    'is_favorite': false,
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
  },
  {
    'id': 4,
    'city': {
      'location': {
        'latitude': 52.38333,
        'longitude': 4.9,
        'zoom': 10
      },
      'name': `Amsterdam`,
    },
    'title': `Wood and stone place`,
    'type': `apartment`,
    'price': 180,
    'rating': 5,
    'bedrooms': 2,
    'max_adults': 1,
    'goods': [],
    'host': {
      'id': 1,
      'name': `Angelina`,
      'avatar_url': `img/avatar-angelina.jpg`,
      'is_pro': true,
    },
    'preview_image': `/img/room.jpg`,
    'images': [
      `/img/apartment-01.jpg`
    ],
    'description': `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    'is_premium': false,
    'is_favorite': false,
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
  },
];

const favorite1 = extend(
    serverOffers[1],
    {[`is_favorite`]: true}
);


const favorite2 = extend(
    serverOffers[2],
    {[`is_favorite`]: true}
);

export const serverFavoritesOffers = [
  favorite1,
  favorite2,
];
