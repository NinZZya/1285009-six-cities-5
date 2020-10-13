import React from 'react';
import {Link} from 'react-router-dom';
import PageContainer, {PageContainerType} from '../../components/page-container/page-container';
import Container from '../../components/container/container';
import {AppPath} from '../../const';


const NOT_FOUND_CONTAINER_TYPE = `cities__places`;

const PageNotFound = () => {
  return (
    <PageContainer empty type={PageContainerType.NOT_FOUND}>
      <div className="cities">
        <Container empty type={NOT_FOUND_CONTAINER_TYPE}>
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


export default PageNotFound;
