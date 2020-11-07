import * as CitiesType from './cities-types';
import {makeActionCreator} from '../../../utils/utils';


export const setCities = makeActionCreator(CitiesType.SET_CITIES);
export const changeActiveCityId = makeActionCreator(CitiesType.CHANGE_ACTIVE_CITY_ID);
