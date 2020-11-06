import axios from 'axios';


const BACKEND_URL = `https://5.react.pages.academy/six-cities`;
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401
};

export const ApiRoute = {
  OFFERS: `/hotels/`,
  NEAR: `/nearby/`,
  FAVORITES: `/favorite/`,
  REVIEWS: `/comments/`,
  LOGIN: `/login/`,
};


export default class Api {
  constructor({onFailCallback}) {
    this._api = axios.create({
      baseURL: BACKEND_URL,
      timeout: REQUEST_TIMEOUT,
      withCredentials: true,
    });

    this._callbacks = {
      onFail: onFailCallback,
    };

    this._onSuccess = this._onSuccess.bind(this);
    this._onFail = this._onFail.bind(this);

    this._api.interceptors.response.use(this._onSuccess, this._onFail);
  }

  _onSuccess(response) {
    return response.data;
  }

  _onFail(err) {
    const {response} = err;

    if (response.status === HttpCode.UNAUTHORIZED) {
      this._callbacks.onFail();
      throw err;
    }

    throw err;
  }

  getApi() {
    return this._api;
  }

  auth(authData) {
    return this._api.post(ApiRoute.LOGIN, authData);
  }

  checkAuth() {
    return this._api.get(ApiRoute.LOGIN);
  }

  getOffers() {
    return this._api.get(ApiRoute.OFFERS);
  }

  getOffer(id) {
    return this._api.get(
        `${ApiRoute.OFFERS}${id}`
    );
  }

  getNearOffers(id) {
    return this._api.get(
        `${ApiRoute.OFFERS}${id}${ApiRoute.NEAR}`
    );
  }

  getFavoritesOffers() {
    return this._api.get(ApiRoute.FAVORITES);
  }

  changeFavoriteOffer(id, status) {
    return this._api.post(
        `${ApiRoute.FAVORITES}${id}/${status}`
    );
  }

  getReviews(id) {
    return this._api.get(
        `${ApiRoute.REVIEWS}${id}`
    );
  }

  addReview(id, review) {
    return this._api.post(
        `${ApiRoute.REVIEWS}${id}`,
        review
    );
  }
}
