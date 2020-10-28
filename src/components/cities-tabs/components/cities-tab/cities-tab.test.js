import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import CitiesTab from './cities-tab';
import history from '../../../../history';
import cities from '../../../../mocks/cities';

const ACTIVE_CITY_ID = 1;
const CITY = cities[ACTIVE_CITY_ID];

it(`Should CitiesTab render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <CitiesTab
            activeCityId={ACTIVE_CITY_ID}
            city={CITY}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
