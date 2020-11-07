import React from 'react';
import {connect} from 'react-redux';
import PageContainer from '../../page-container/page-container';
import Container from '../../container/container';
import FavoritesList from '../../favorites-list/favorites-list';
import NoFavorites from '../../no-favorites/no-favorites';
import LoadingData from '../../loading-data/loading-data';
import * as OffersSelector from '../../../store/reducer/offers/offers-selectors';
import {DataStatus} from '../../../constants/const';
import * as Type from '../../../constants/types';


const ContainerType = {
  PAGE: `favorites`,
  FAVORITES: `page__favorites`,
};

const FavoritesPage = (props) => {
  const {favorites = {}, offersStatus} = props;
  const favoritesCount = Object.keys(favorites).length;
  const isEmpty = offersStatus === DataStatus.SUCCESS && !favoritesCount;
  const emptyContent = isEmpty ? <NoFavorites /> : null;

  const favoritesContent = offersStatus === DataStatus.SUCCESS && favoritesCount ?
    <FavoritesList favorites={favorites} /> :
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
};

const mapStateToProps = (state) => ({
  offersStatus: OffersSelector.getOffersStatus(state),
  favorites: OffersSelector.getFavoritesOffers(state),
});


export {FavoritesPage};
export default connect(mapStateToProps)(FavoritesPage);
