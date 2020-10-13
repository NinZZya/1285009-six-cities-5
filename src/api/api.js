import users from '../mocks/users';
import generateOffers from '../mocks/generate-offers';

const DELAY_MS = 500;

const OFFERS = generateOffers();
console.log(OFFERS)

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export default class Api {
  static auth(authData) {
    const {email, password} = authData;

    return delay(DELAY_MS)
      .then(() => {
        const user = users.find((item) => item.email === email);

        if (!user) {
          throw new Error(`User not found`);
        }

        if (user && user.password === password) {
          return {
            id: user.id,
            email: user.email,
          };
        }

        throw new Error(`Bad authorization`);
      });
  }

  static getOffers() {
    return delay(DELAY_MS)
      .then(() => OFFERS);
  }

  static adaptOffersToClient(offers) {
    return offers.reduce((mapOffers, offer) => {
      mapOffers[offer.id] = offer;
      return mapOffers;
    }, {});
  }
}

