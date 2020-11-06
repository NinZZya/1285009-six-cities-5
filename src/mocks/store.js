import NameSpace from '../store/reducer/name-space';
import offers, {offersMap} from './offers';
import cities from './cities';
import reviews from './reviews';
import {user} from './users';
import {SortType, DataStatus, UserStatus} from '../constants/const';

const ACTIVE_CITY_ID = 4;
const ERROR = `ERROR`;
const DATA_STATUS = DataStatus.SUCCESS;
const SORT_TYPE = SortType.HIGH_TO_LOW;

const citiesState = {
  cities,
  activeId: ACTIVE_CITY_ID,
};

const offersState = {
  status: DATA_STATUS,
  offers: offersMap,
  favorites: offersMap,
  sortType: SORT_TYPE,
  offerStatus: DATA_STATUS,
  reviewsStatus: DATA_STATUS,
  reviews,
  nearOffersStatus: DATA_STATUS,
  nearOffers: offers,
};

const userState = {
  status: UserStatus.NO_AUTH,
  user,
  error: ERROR,
};

export default {
  [NameSpace.CITIES]: citiesState,
  [NameSpace.OFFERS]: offersState,
  [NameSpace.USER]: userState,
};
