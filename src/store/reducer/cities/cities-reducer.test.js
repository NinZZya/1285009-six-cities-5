import * as CitiesType from './cities-types';
import citiesReducer, {initialState} from './cities-reducer';
import cities from '../../../mocks/cities';
import {extend} from '../../../utils/utils';


const ACTIVE_ID = 4;
const TEST_CITIES = extend(
    initialState.cities,
    cities
);

const SETE_CITIES_ACTION = {
  type: CitiesType.SET_CITIES,
  payload: cities,
};

const CHANGE_ACTIVE_CITY_ID_ACTION = {
  type: CitiesType.CHANGE_ACTIVE_CITY_ID,
  payload: ACTIVE_ID,
};

describe(`Testing User reducer`, () => {
  it(`Testing initialState`, () => {
    expect(
        citiesReducer(void 0, {type: ``})
    ).toMatchObject(initialState);
  });

  it(`Testing SETE_CITIES_ACTION = ${SETE_CITIES_ACTION}`, () => {
    expect(
        citiesReducer({}, SETE_CITIES_ACTION)
    ).toMatchObject({
      cities: TEST_CITIES,
    });
  });

  it(`Testing CHANGE_ACTIVE_CITY_ID_ACTION = ${CHANGE_ACTIVE_CITY_ID_ACTION}`, () => {
    expect(
        citiesReducer({}, CHANGE_ACTIVE_CITY_ID_ACTION)
    ).toMatchObject({
      activeId: ACTIVE_ID,
    });
  });
});
