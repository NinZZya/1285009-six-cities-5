import React from 'react';
import {useRouteMatch, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import PageContainer from '../../components/page-container/page-container';
import Container from '../../components/container/container';
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
import Message from '../../components/message/message';
import OffersList from '../../components/offers-list/offers-list';
import * as OffersSelector from '../../redux/offers/offers-selectors';
import * as Type from '../../types';
import {AppPath, IdName, LoadStatus, LOADING_MESSAGE, OffersListType} from '../../const';


const TypeContainer = {
  PAGE: `property`,
  PROPERTY: `property__container`,
};

const getOfferId = (match) => {
  const offerId = Number(match.params[IdName.OFFER]);

  return !isNaN(offerId) ? offerId : -1;
};

const getOfferContent = (offer, offers) => {
  const {
    images,
    isPremium,
    title,
    isFavorite,
    rate,
    type,
    bedroomsCount,
    adultsCount,
    features,
    price,
    host,
    description,
    reviews,
  } = offer;

  return (
    <PageContainer type={TypeContainer.PAGE}>
      <section className="property">
        <OfferGallery images={images} />
        <Container type={TypeContainer.PROPERTY}>
          <div className="property__wrapper">
            {isPremium && <OfferMark />}
            <OfferHeader title={title} isFavorite={isFavorite} />
            <OfferRaiting rate={rate} />
            <OfferFeatures type={type} bedroomsCount={bedroomsCount} adultsCount={adultsCount} />
            <OfferPrice price={price} />
            {features.length && <OfferInside features={features} />}
            <OfferHost host={host} description={description} />
            <Reviews reviews={reviews} />
          </div>
        </Container>
        <Map />
        <Container>
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <OffersList type={OffersListType.NEAR} offers={offers.slice(0, 3)} />
          </section>
        </Container>
      </section>
    </PageContainer>
  );
};

const Offer = (props) => {
  const {offersStatus, offers, getOffer} = props;

  const offerPath = `${AppPath.OFFER}/:${IdName.OFFER}`;
  const matchOfferId = useRouteMatch(offerPath, IdName.OFFER);
  const activeOfferId = getOfferId(matchOfferId);
  const history = useHistory();

  const offer = getOffer(activeOfferId);

  if (activeOfferId === -1 || (!offer && offersStatus === LoadStatus.SUCCESS)) {
    history.push(AppPath.NOT_FOUND);
  }

  const loader = offersStatus === LoadStatus.LOADING ?
    <Message title={LOADING_MESSAGE} /> :
    null;

  const offerContent = offersStatus === LoadStatus.SUCCESS ?
    getOfferContent(offer, offers) :
    null;

  return (
    <main className="page__main page__main--property" key={activeOfferId}>
      {loader}
      {offerContent}
    </main>
  );
};

Offer.propTypes = {
  offersStatus: Type.OFFERS_STATUS,
  offers: Type.LIST_OFFERS,
  getOffer: Type.FUNCTION,
};


const mapStateToProps = (state) => ({
  offersStatus: OffersSelector.getOffersStatus(state),
  offers: OffersSelector.getSortedCityOffers(state),
  getOffer: (offerId) => OffersSelector.getOffer(state, offerId),
});


export {Offer};
export default connect(mapStateToProps)(Offer);
