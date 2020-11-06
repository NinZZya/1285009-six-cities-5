import * as CitiesType from './cities-types';
import {setCities, changeActiveCityId} from './cities-actions';
import cities from '../../../mocks/cities';


const ACTIVE_CITY_ID = 4;

describe(`Testing Cities actions`, () => {
  it(`Testing action: setCities`, () => {
    expect(setCities(cities)).toMatchObject({
      type: CitiesType.SET_CITIES,
      payload: cities,
    });
  });

  it(`Testing action: changeActiveCityId`, () => {
    expect(changeActiveCityId(ACTIVE_CITY_ID)).toMatchObject({
      type: CitiesType.CHANGE_ACTIVE_CITY_ID,
      payload: ACTIVE_CITY_ID,
    });
  });
});
