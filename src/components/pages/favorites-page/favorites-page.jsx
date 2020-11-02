import React from 'react';
import {connect} from 'react-redux';
import PageContainer from '@/components/page-container/page-container';
import Container from '@/components/container/container';
import FavoritesList from '@/components/favorites-list/favorites-list';
import NoFavorites from '@/components/no-favorites/no-favorites';
import LoadingData from '@/components/loading-data/loading-data';
import * as OffersSelector from '@/reducer/offers/offers-selectors';
import * as CitiesSelector from '@/reducer/cities/cities-selectors';
import {DataStatus} from '@/const';
import * as Type from '@/types';


const ContainerType = {
  PAGE: `favorites`,
  FAVORITES: `page__favorites`,
};

const FavoritesPage = (props) => {
  const {favorites, offersStatus, activeCityId} = props;
  const favoritesCount = Object.keys(favorites).length;
  const isEmpty = offersStatus === DataStatus.SUCCESS && !favoritesCount;
  const emptyContent = isEmpty ? <NoFavorites /> : null;

  const favoritesContent = offersStatus === DataStatus.SUCCESS && favoritesCount ?
    <FavoritesList favorites={favorites} activeCityId={activeCityId} /> :
    null;

  return (
    <PageContainer type={ContainerType.PAGE}>
      <Container type={ContainerType.FAVORITES}>
        <section className={`favorites ${isEmpty ? `favorites--empty` : ``}`}>
          <h1 className={isEmpty ? `visually-hidden` : `favorites__title`}>
            {isEmpty ? `Favorites (empty)` : `Saved listing`}
          </h1>
          <LoadingData status={offersStatus} />
          {emptyContent}
          {favoritesContent}
        </section>
      </Container>
    </PageContainer>
  );
};


FavoritesPage.propTypes = {
  offersStatus: Type.DATA_STATUS,
  favorites: Type.FAVORITES_OFFERS,
  activeCityId: Type.ID,
};

const mapStateToProps = (state) => ({
  offersStatus: OffersSelector.getOffersStatus(state),
  activeCityId: CitiesSelector.getActiveCityId(state),
  favorites: OffersSelector.getFavoritesOffers(state),
});


export {FavoritesPage};
export default connect(mapStateToProps)(FavoritesPage);
