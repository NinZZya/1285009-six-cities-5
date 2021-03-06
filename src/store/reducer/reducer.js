import {combineReducers} from 'redux';
import userReducer from './user/user-reducer';
import citiesReducer from './cities/cities-reducer';
import offersReducer from './offers/offers-reducer';
import NameSpace from './name-space';


export default combineReducers({
  [NameSpace.USER]: userReducer,
  [NameSpace.CITIES]: citiesReducer,
  [NameSpace.OFFERS]: offersReducer,
});
