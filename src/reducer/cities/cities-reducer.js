import * as CitiesType from './cities-type';
import {extend} from '../../utils/utils';
import {DEFAULT_CITY_ID} from '../../const';


const cities = {
  1: {id: 1, name: `Paris`},
  2: {id: 2, name: `Cologne`},
  3: {id: 3, name: `Brussels`},
  4: {id: 4, name: `Amsterdam`},
  5: {id: 5, name: `Hamburg`},
  6: {id: 6, name: `Dusseldorf`},
};

const initialState = {
  cities,
  activeId: DEFAULT_CITY_ID,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CitiesType.UPDATE_CITIES:
      const updatedCities = extend(state.cities, action.payload);

      return extend(state, {
        cities: updatedCities,
      });
    case CitiesType.CHANGE_ACTIVE_CITY_ID:
      return extend(state, {
        activeId: action.payload,
      });
    default:
      return state;
  }
};