import {adaptCityToClient} from './city-adapter';

export const adaptOfferToClient = (offer) => {
  const city = adaptCityToClient(offer);

  return {
    id: offer[`id`],
    city,
    title: offer[`title`],
    type: offer[`type`],
    price: offer[`price`],
    rate: offer[`rating`],
    bedroomsCount: offer[`bedrooms`],
    adultsCount: offer[`max_adults`],
    features: offer[`goods`],
    host: {
      name: offer[`name`],
      avatar: offer[`avatar_url`],
      isPro: offer[`is_pro`],
    },
    previewImage: offer[`preview_image`],
    images: offer[`images`],
    description: offer[`description`],
    isPremium: offer[`is_premium`],
    isFavorite: offer[`is_favorite`],
    coords: [
      offer[`location`][`latitude`],
      offer[`location`][`longitude`],
    ],
  };
};


export const adaptOffersDataToClient = (offers) => {
  const adaptCities = {};
  const adaptOffers = offers.reduce((mapOffers, offer) => {
    const adaptOffer = adaptOfferToClient(offer);
    const city = adaptOffer.city;
    adaptCities[city.id] = city;

    mapOffers[adaptOffer.id] = adaptOffer;
    return mapOffers;
  }, {});

  return {
    offers: adaptOffers,
    cities: adaptCities,
  };
};


export const adaptOffersToListToClient = (offers) => {
  const adaptOffers = offers.map(adaptOfferToClient);
  return adaptOffers;
};
