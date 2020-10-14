import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import PageContainer from '../../components/page-container/page-container';
import Container from '../../components/container/container';
import CitiesTabs from '../../components/cities-tabs/cities-tabs';
import Sort from '../../components/sort/sort';
import OffersList, {OffersListType} from '../../components/offers-list/offers-list';
import NoOffers from '../../components/no-offers/no-offers';
import Map from '../../components/map/map';
import Message from '../../components/message/message';
import withActiveId from '../../hocs/with-active-id/with-active-id';
import * as OffersSelector from '../../redux/offers/offers-selectors';
import * as OffersAction from '../../redux/offers/offers-actions';
import * as Type from '../../types';
import {
  CITIES,
  SortType,
  AppPath,
  IdName,
  DataStatus,
  DEFAULT_CITY_ID,
  LOADING_MESSAGE,
} from '../../const';


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

const getOffersContent = (renderArgs) => {
  const {
    activeId,
    onActiveIdChange,
    offers,
    activeCity,
    sortType,
    changeOffersSortType,
  } = renderArgs;

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
    activeId,
    onActiveIdChange,
    activeCityId,
    offersStatus,
    offers,
    sortType,
    chageActiveCityId,
    changeOffersSortType,
    match,
  } = props;

  const pathCityId = getCityId(match);

  const activeCity = CITIES[activeCityId];
  const pathCity = CITIES[pathCityId];

  if (!pathCity || pathCityId === -1) {
    return <Redirect to ={AppPath.NOT_FOUND} />;
  }

  if ((pathCityId !== activeCityId) && pathCity) {
    chageActiveCityId(pathCityId);
  }

  const loader = offersStatus === DataStatus.LOADING ?
    <Message title={LOADING_MESSAGE} /> :
    null;

  const offersContent = offersStatus === DataStatus.SUCCESS ?
    getOffersContent(
        {
          offers, activeCity,
          sortType, changeOffersSortType,
          activeId, onActiveIdChange,
        }
    ) :
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
      />
      <div className="cities">
        <Container
          type={ContainerType.CITIES}
          empty={isEmpty}
        >
          {loader}
          {offersContent}
        </Container>
      </div>
    </PageContainer>
  );
};

MainPage.propTypes = {
  activeId: Type.ID,
  onActiveIdChange: Type.FUNCTION,
  offersStatus: Type.OFFERS_STATUS,
  offers: Type.LIST_OFFERS,
  activeCityId: Type.ID,
  sortType: Type.SORT,
  chageActiveCityId: Type.FUNCTION,
  changeOffersSortType: Type.FUNCTION,
  match: Type.MATCH,
};

const mapStateToProps = (state) => ({
  offersStatus: OffersSelector.getOffersStatus(state),
  offers: OffersSelector.getSortedCityOffers(state),
  activeCityId: OffersSelector.getActiveCityId(state),
  sortType: OffersSelector.getOffersSortType(state),
});

const mapDispatchToProps = (dispatch) => ({
  chageActiveCityId: (cityId) => {
    dispatch(OffersAction.changeActiveCityId(cityId));
  },
  changeOffersSortType: (sortType) => {
    dispatch(OffersAction.changeOffersSortType(sortType));
  }
});


export {MainPage};
export default withActiveId(
    connect(mapStateToProps, mapDispatchToProps)(MainPage)
);
