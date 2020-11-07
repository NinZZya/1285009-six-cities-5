import {
  adaptOfferToClient,
  adaptOffersDataToClient,
  adaptOffersToListToClient,
} from './offers-adapter';

import {clientOffers} from '../mocks/offers';
import {serverOffers} from '../mocks/server-data';

const CITY = {
  id: 4,
  name: `Amsterdam`,
  coords: [52.38333, 4.9],
  zoom: 10,
};
const SERVER_OFFER = serverOffers[0];
const CLIENT_OFFER = clientOffers[SERVER_OFFER.id];
const LIST_OFFERS = Object.values(clientOffers);
const OFFERS_DATA = {
  offers: clientOffers,
  cities: {
    [CITY.id]: CITY,
  },
};


it(`Testing adaptCityToClient`, () => {
  expect(adaptOfferToClient(SERVER_OFFER)).toMatchObject(CLIENT_OFFER);
});

it(`Testing adaptOffersDataToClient`, () => {
  expect(adaptOffersDataToClient(serverOffers)).toMatchObject(OFFERS_DATA);
});

it(`Testing adaptOffersToListToClient`, () => {
  expect(adaptOffersToListToClient(serverOffers)).toEqual(LIST_OFFERS);
});
