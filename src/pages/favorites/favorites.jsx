import React from 'react';
import PageContainer from '../../components/page-container/page-container';
import Container from '../../components/container/container';
import FavoritesList from '../../components/favorites-list/favorites-list';


const ContainerType = {
  PAGE: `favorites`,
  FAVORITES: `cities__places`,
};

const Favorites = () => {
  return (
    <PageContainer page={ContainerType.PAGE}>
      <Container type={ContainerType.FAVORITES}>
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoritesList />
        </section>
      </Container>
    </PageContainer>
  );
};


export default Favorites;
