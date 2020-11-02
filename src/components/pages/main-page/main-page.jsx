import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import PageContainer from '@/components/page-container/page-container';
import Container from '@/components/container/container';
import CitiesTabs from '@/components/cities-tabs/cities-tabs';
import Sort from '@/components/sort/sort';
import OffersList, {OffersListType} from '@/components/offers-list/offers-list';
import NoOffers from '@/components/no-offers/no-offers';
import LoadingData from '@/components/loading-data/loading-data';
import Map from '@/components/map/map';
import withActiveId from '@/hocs/with-active-id/with-active-id';
import * as CitiesAction from '@/reducer/cities/cities-actions';
import * as CitiesSelector from '@/reducer/cities/cities-selectors';
import * as OffersAction from '@/reducer/offers/offers-actions';
import * as OffersSelector from '@/reducer/offers/offers-selectors';
import * as Type from '@/types';
import {
  SortType,
  AppPath,
  IdName,
  DataStatus,
  DEFAULT_CITY_ID,
} from '@/const';


const SORTS = Object.values(SortType);

const ContainerType = {
  PAGE: `index`,
  CITIES: `cities__places`,
};

const getCityId = (match) => {
  if (match.path !== AppPath.ROOT) {
    const cityId = Number(match.params[IdName.CITY]);
    return cityId && !isNaN(cityId) ? cityId : -1;
  }

  return DEFAULT_CITY_ID;
};

const getOffersContent = (args) => {
  const {
    activeId,
    onActiveIdChange,
    offers,
    cities,
    activeCityId,
    sortType,
    changeOffersSortType,
  } = args;

  const activeCity = cities[activeCityId];

  if (offers.length) {

    return (
      <Container type={ContainerType.CITIES}>
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {`${offers.length} places to stay in ${activeCity.name}`}
          </b>
          <Sort
            activeSort={sortType}
            sorts={SORTS}
            onSortClick={(type) => {
              changeOffersSortType(type);
            }}
          />
          <OffersList
            type={OffersListType.MAIN}
            offers={offers}
            onOfferHover={onActiveIdChange}
          />
        </section>
        <div className="cities__right-section">
          <section className="cities__map  map">
            <Map
              center={activeCity}
              pins={offers}
              activeId={activeId}
            />
          </section>
        </div>
      </Container>
    );
  }

  return <NoOffers city={activeCity} />;
};

const MainPage = (props) => {
  const {
    activeCityId,
    offersStatus,
    offers,
    cities,
    chageActiveCityId,
    match,
  } = props;

  const pathCityId = getCityId(match);
  const pathCity = cities[pathCityId];

  if (!pathCity || pathCityId === -1) {
    return <Redirect to={AppPath.NOT_FOUND} />;
  }

  if ((pathCityId !== activeCityId) && pathCity) {
    chageActiveCityId(pathCityId);
  }

  const offersContent = offersStatus === DataStatus.SUCCESS ?
    getOffersContent(props) :
    null;

  const isEmpty = !offers.length;

  return (
    <PageContainer
      type={ContainerType.PAGE}
      empty={isEmpty}
    >
      <h1 className="visually-hidden">Cities</h1>
      <CitiesTabs
        activeCityId={activeCityId}
        cities={cities}
      />
      <div className="cities">
        <Container
          type={ContainerType.CITIES}
          empty={isEmpty}
        >
          <LoadingData status={offersStatus} />
          {offersContent}
        </Container>
      </div>
    </PageContainer>
  );
};

MainPage.propTypes = {
  activeId: Type.ID,
  onActiveIdChange: Type.FUNCTION,
  offersStatus: Type.DATA_STATUS,
  offers: Type.LIST_OFFERS,
  cities: Type.CITIES,
  activeCityId: Type.ID,
  sortType: Type.SORT,
  chageActiveCityId: Type.FUNCTION,
  changeOffersSortType: Type.FUNCTION,
  match: Type.MATCH,
};

const mapStateToProps = (state) => ({
  offersStatus: OffersSelector.getOffersStatus(state),
  offers: OffersSelector.getSortedCityOffers(state),
  cities: CitiesSelector.getCities(state),
  activeCityId: CitiesSelector.getActiveCityId(state),
  sortType: OffersSelector.getOffersSortType(state),
});

const mapDispatchToProps = (dispatch) => ({
  chageActiveCityId: (cityId) => {
    dispatch(CitiesAction.changeActiveCityId(cityId));
  },
  changeOffersSortType: (sortType) => {
    dispatch(OffersAction.changeOffersSortType(sortType));
  },
});


export {MainPage};
export default withActiveId(
    connect(mapStateToProps, mapDispatchToProps)(MainPage)
);
