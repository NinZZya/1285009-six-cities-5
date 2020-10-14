import React from 'react';
import {connect} from 'react-redux';
import PageContainer from '../../components/page-container/page-container';
import Container from '../../components/container/container';
import FavoritesList from '../../components/favorites-list/favorites-list';
import NoFavorites from '../../components/no-favorites/no-favorites';
import Message from '../../components/message/message';
import {getActiveCityId, getFavoritesOffers, getOffersStatus} from '../../redux/offers/offers-selectors';
import {DataStatus, LOADING_MESSAGE} from '../../const';
import * as Type from '../../types';


const ContainerType = {
  PAGE: `favorites`,
  FAVORITES: `page__favorites`,
};

const FavoritesPage = (props) => {
  const {favorites, offersStatus, activeCityId} = props;
  const citiesCount = Object.keys(favorites).length;

  const loader = offersStatus === DataStatus.LOADING ?
    <Message title={LOADING_MESSAGE} /> :
    null;

  const isEmpty = offersStatus === DataStatus.SUCCESS && !citiesCount;
  const emptyContent = isEmpty ? <NoFavorites /> : null;

  const favoritesContent = offersStatus === DataStatus.SUCCESS && citiesCount ?
    <FavoritesList favorites={favorites} activeCityId={activeCityId} /> :
    null;

  return (
    <PageContainer type={ContainerType.PAGE}>
      <Container type={ContainerType.FAVORITES}>
        <section className={`favorites ${isEmpty ? `favorites--empty` : ``}`}>
          <h1 className={isEmpty ? `visually-hidden` : `favorites__title`}>
            {isEmpty ? `Favorites (empty)` : `Saved listing`}
          </h1>
          {loader}
          {emptyContent}
          {favoritesContent}
        </section>
      </Container>
    </PageContainer>
  );
};


FavoritesPage.propTypes = {
  offersStatus: Type.OFFERS_STATUS,
  favorites: Type.FAVORITES_OFFERS,
  activeCityId: Type.ID,
};

const mapStateToProps = (state) => ({
  offersStatus: getOffersStatus(state),
  activeCityId: getActiveCityId(state),
  favorites: getFavoritesOffers(state),
});


export {FavoritesPage};
export default connect(mapStateToProps)(FavoritesPage);
