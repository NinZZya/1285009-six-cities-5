import {adaptCityToClient} from './city-adapter';
import {toFirstUpperCase} from '../utils/utils';

export const adaptOfferToClient = (offer) => {
  const city = adaptCityToClient(offer.city);
  return {
    id: offer[`id`],
    city,
    title: offer[`title`],
    type: toFirstUpperCase(offer[`type`]),
    price: offer[`price`],
    rate: Math.round(offer[`rating`]),
    bedroomsCount: offer[`bedrooms`],
    adultsCount: offer[`max_adults`],
    features: offer[`goods`],
    host: {
      name: offer[`host`][`name`],
      avatar: `/${offer[`host`][`avatar_url`]}`,
      isPro: offer[`host`][`is_pro`],
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
    zoom: offer[`location`][`zoom`],
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


export const adaptOffersToListToClient = (offers) => offers.map(adaptOfferToClient);
