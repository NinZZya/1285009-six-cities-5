import {getActiveCityId, getCities} from './cities-selectors';
import cities from '../../../mocks/cities';
import store from '../../../mocks/store';


const ACTIVE_CITY_ID = 4;

describe(`Testing Cities selectors`, () => {
  it(`Testing action: getActiveCityId`, () => {
    expect(getActiveCityId(store)).toBe(ACTIVE_CITY_ID);
  });

  it(`Testing action: getCities`, () => {
    expect(getCities(store)).toEqual(cities);
  });
});
