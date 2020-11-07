import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import CitiesTabs from './cities-tabs';
import history from '../../constants/history';
import cities from '../../mocks/cities';


const ACTIVE_CITY_ID = 1;

it(`Should CitiesTabs render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <CitiesTabs
            activeCityId={ACTIVE_CITY_ID}
            cities={cities}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
