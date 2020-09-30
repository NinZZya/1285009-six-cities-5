import React from 'react';
import Header from '../../components/header/header';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferMark from '../../components/offer-mark/offer-mark';
import OfferHeader from '../../components/offer-header/offer-header';
import OfferRaiting from '../../components/offer-raiting/offer-raiting';
import OfferFeatures from '../../components/offer-features/offer-features';
import OfferPrice from '../../components/offer-price/offer-price';
import OfferInside from '../../components/offer-inside/offer-inside';
import OfferHost from '../../components/offer-host/offer-host';
import Reviews from '../../components/reviews/reviews';
import Map from '../../components/map/map';
import OffersList from '../../components/offers-list/offers-list';

const Offer = () => {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <OfferGallery />
          <div className="property__container container">
            <div className="property__wrapper">
              <OfferMark />
              <OfferHeader />
              <OfferRaiting />
              <OfferFeatures />
              <OfferPrice />
              <OfferInside />
              <OfferHost />
              <Reviews />
            </div>
          </div>
          <Map />
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
                Other places in the neighbourhood
              </h2>
              <OffersList />
            </section>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Offer;
