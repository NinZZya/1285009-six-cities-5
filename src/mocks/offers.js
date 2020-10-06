export default [
  {
    id: 0,
    city: {
      id: 1,
      name: `Paris`,
    },
    title: `Wood and stone place`,
    type: `Private room`,
    price: 228,
    rate: 0,
    bedroomsCount: 1,
    adultsCount: 1,
    features: [
      `Dishwasher`,
      `Baby seat`,
    ],
    host: {
      name: `Angelina`,
      avatar: `/img/avatar-angelina.jpg`,
      isPro: false,
    },
    images: [
      `/img/apartment-03.jpg`,
      `/img/apartment-02.jpg`,
    ],
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    reviews: [
      {
        id: 0,
        user: {
          id: 3,
          name: `John`,
          avatar: `/img/avatar.svg`,
        },
        date: `2019-11-26`,
        rate: 2,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      },
      {
        id: 1,
        user: {
          id: 3,
          name: `John`,
          avatar: `/img/avatar.svg`
        },
        date: `2019-03-23`,
        rate: 4,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      }
    ],
    isPremium: false,
  },
  {
    id: 1,
    city: {
      id: 1,
      name: `Paris`,
    },
    title: `Canal View Prinsengracht`,
    type: `Apartment`,
    price: 97,
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
    images: [
      `/img/apartment-01.jpg`,
      `/img/apartment-02.jpg`,
    ],
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    reviews: [
      {
        id: 2,
        user: {
          id: 4,
          name: `Ann`,
          avatar: `/img/avatar.svg`
        },
        date: `2018-09-22`,
        rate: 2,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      },
      {
        id: 3,
        user: {
          id: 1,
          name: `Max`,
          avatar: `/img/avatar-max.jpg`
        },
        date: `2018-10-24`,
        rate: 0,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      },
      {
        id: 4,
        user: {
          id: 4,
          name: `Ann`,
          avatar: `/img/avatar.svg`
        },
        date: `2019-08-16`,
        rate: 1,
        text: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
      }
    ],
    isPremium: false,
  },
  {
    id: 2,
    city: {
      id: 2,
      name: `Paris`
    },
    title: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    price: 89,
    rate: 1,
    bedroomsCount: 2,
    adultsCount: 1,
    features: [],
    host: {
      name: `Angelina`,
      avatar: `/img/avatar-angelina.jpg`,
      isPro: false,
    },
    images: [
      `/img/apartment-01.jpg`
    ],
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    reviews: [
      {
        id: 5,
        user: {
          id: 4,
          name: `Ann`,
          avatar: `/img/avatar.svg`,
        },
        date: `2019-06-07`,
        rate: 3,
        text: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
      },
      {
        id: 6,
        user: {
          id: 1,
          name: `Max`,
          avatar: `/img/avatar-max.jpg`,
        },
        date: `2019-06-02`,
        rate: 1,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      }
    ],
    isPremium: false,
  },
  {
    id: 3,
    city: {
      id: 2,
      name: `Paris`,
    },
    title: `Wood and stone place`,
    type: `Private room`,
    price: 381,
    rate: 3,
    bedroomsCount: 1,
    adultsCount: 1,
    features: [
      `Fridge`,
      `Towels`,
    ],
    host: {
      name: `Angelina`,
      avatar: `/img/avatar-angelina.jpg`,
      isPro: false
    },
    images: [
      `/img/room.jpg`,
      `/img/apartment-02.jpg`,
      `/img/apartment-03.jpg`,
      `/img/studio-01.jpg`,
    ],
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    reviews: [
      {
        id: 7,
        user: {
          id: 4,
          name: `Ann`,
          avatar: `/img/avatar.svg`,
        },
        date: `2018-11-08`,
        rate: 4,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      },
      {
        id: 8,
        user: {
          id: 2,
          name: `Angelina`,
          avatar: `/img/avatar-angelina.jpg`
        },
        date: `2019-02-23`,
        rate: 0,
        text: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
      }
    ],
    isPremium: false,
  }
];
