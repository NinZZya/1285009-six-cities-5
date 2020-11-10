import React from 'react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import {MainPage} from './main-page';
import store from '../../../store/store';
import history from '../../../constants/history';
import {DataStatus, SortType} from '../../../constants/const';
import offers from '../../../mocks/offers';
import cities from '../../../mocks/cities';


const ACTIVE_CITY_ID = 4;
const testing = () => {};

describe(`Should MainPage render correctly`, () => {
  it(`Should MainPage render correctly loading`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <MainPage
              offersStatus={DataStatus.LOADING}
              cities={cities}
              activeCityId={ACTIVE_CITY_ID}
              sortType={SortType.POPULAR}
              onChageActiveCityId={testing}
              onChangeOffersSortType={testing}
            />
          </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should MainPage render correctly error`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <MainPage
              offersStatus={DataStatus.LOADING}
              cities={cities}
              activeCityId={ACTIVE_CITY_ID}
              sortType={SortType.POPULAR}
              onChageActiveCityId={testing}
              onChangeOffersSortType={testing}
            />
          </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should MainPage render correctly success with offers`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <MainPage
                offersStatus={DataStatus.SUCCESS}
                offers={offers}
                cities={cities}
                activeCityId={ACTIVE_CITY_ID}
                sortType={SortType.POPULAR}
                onChageActiveCityId={testing}
                onChangeOffersSortType={testing}
              />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
