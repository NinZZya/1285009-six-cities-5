import React from 'react';
import {Link} from 'react-router-dom';
import PageContainer from '../../page-container/page-container';
import Container from '../../container/container';
import {AppPath} from '../../../constants/const';


const ContainerType = {
  PAGE: `index`,
  NOT_FOUND: `cities__places`,
};

const NotFoundPage = () => {
  return (
    <PageContainer empty type={ContainerType.PAGE}>
      <div className="cities">
        <Container empty type={ContainerType.NOT_FOUND}>
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">Page not found</b>
              <p>
                <Link to={AppPath.ROOT} className="button form__submit">
                  Click here to visit the main page
                </Link>
              </p>
            </div>
          </section>
          <div className="cities__right-section"></div>
        </Container>
      </div>
    </PageContainer>
  );
};


export default NotFoundPage;
