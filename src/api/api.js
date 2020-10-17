import users from '../mocks/users';
import generateOffers from '../mocks/generate-offers';
import generateReviews, {reviewId} from '../mocks/generate-reviews';

const DELAY_MS = 500;

export const mockOffers = generateOffers();
export const mockReviews = generateReviews(mockOffers);

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
      .then(() => mockOffers);
  }

  static getNearOffers(id) {
    return delay(DELAY_MS)
      .then(() => {
        const activeOffer = mockOffers.find((offer) => offer.id === id);
        const nearOffers = mockOffers.map((offer) => {
          return Object.assign({}, offer, {
            distance: Math.sqrt(
                Math.pow((activeOffer.coords[0] - offer.coords[0]), 2) +
                Math.pow((activeOffer.coords[1] - offer.coords[1]), 2)
            )
          });
        })
        .sort((a, b) => a.distance - b.distance);

        return nearOffers.slice(1, nearOffers.length);
      });
  }

  static getReviews(id) {
    return delay(DELAY_MS)
      .then(() => mockReviews[id]);
  }

  static addReview(offerId, data) {
    return delay(DELAY_MS)
      .then(() => {
        reviewId.value++;
        const review = Object.assign({}, data, {
          id: reviewId.value,
        });
        mockReviews[offerId].push(review);
        return true;
      });
  }

  static adaptOffersToClient(offers) {
    return offers.reduce((mapOffers, offer) => {
      mapOffers[offer.id] = offer;
      return mapOffers;
    }, {});
  }

  static adaptReviewToServer(review) {
    return {
      id: review.id,
      user: review.user,
      date: String(review.date),
      rate: Number(review.rate),
      text: String(review.text),
    };
  }
}
