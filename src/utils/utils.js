import {SortType, MAX_RATE} from "../constants/const";


export const calcRatePercent = (rate) => rate * 100 / MAX_RATE;

export const dateFormatter = new Intl.DateTimeFormat(`en-us`, {
  year: `numeric`,
  month: `long`,
});

export const convertToReviewDate = (date) => dateFormatter.format(new Date(date));
export const convertToReviewDateTime = (date) => date.toISOString().split(`T`)[0];

export const makeActionCreator = (type) => (payload) => ({
  type,
  payload,
});

export const extend = (a, ...b) => {
  return Object.assign({}, a, ...b);
};

export const SortOffers = {
  [SortType.POPULAR]: (offers) => offers,
  [SortType.TOP_RATED_FIRST]: (offers) => offers.slice().sort((a, b) => b.rate - a.rate),
  [SortType.LOW_TO_HIGH]: (offers) => offers.slice().sort((a, b) => a.price - b.price),
  [SortType.HIGH_TO_LOW]: (offers) => offers.slice().sort((a, b) => b.price - a.price),
};

export const toFirstUpperCase = (word) => word[0].toUpperCase() + word.slice(1);
