import {combineReducers} from 'redux';
import userReducer from './user/user-reducer';
import offersReducer from './offers/offers-reducer';
import reviewsReducer from './reviews/reviews-reducer';
import NameSpace from './name-space';


export default combineReducers({
  [NameSpace.USER]: userReducer,
  [NameSpace.OFFERS]: offersReducer,
  [NameSpace.REVIEWS]: reviewsReducer,
});
