import * as CitiesType from './cities-type';
import {makeActionCreator} from '../../utils/utils';


export const setCities = makeActionCreator(CitiesType.SETE_CITIES);
export const changeActiveCityId = makeActionCreator(CitiesType.CHANGE_ACTIVE_CITY_ID);
