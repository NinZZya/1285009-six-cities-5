import React from 'react';
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
import * as Type from '../../types';
import PageNotFound from '../page-not-found/page-not-found';


const OFFERS = new Array(5).fill(``);
const LIST_CLASS_NAME = `near-places__list`;

const Offer = ({activeOfferId}) => {
  if (activeOfferId < 0) {
    return <PageNotFound />;
  }

  return (
    <main className="page__main page__main--property" key={activeOfferId}>
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
            <OffersList className={LIST_CLASS_NAME} offers={OFFERS.slice(0, 3)} />
          </section>
        </div>
      </section>
    </main>
  );
};


Offer.propTypes = {
  activeOfferId: Type.ID,
};


export default Offer;
