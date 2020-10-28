const offers = [
  {
    id: 0,
    city: {
      id: 4,
      name: `Amsterdam`,
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
  },
  {
    id: 1,
    city: {
      id: 4,
      name: `Amsterdam`,
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
  },
  {
    id: 2,
    city: {
      id: 4,
      name: `Amsterdam`,
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
  },
  {
    id: 3,
    city: {
      id: 4,
      name: `Amsterdam`
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
  },
  {
    id: 4,
    city: {
      id: 4,
      name: `Amsterdam`
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
  },
];

export const favoritesOffers = {
  4: offers,
};

export default offers;
