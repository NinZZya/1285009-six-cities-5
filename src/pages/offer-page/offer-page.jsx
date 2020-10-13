import React from 'react';
import {useRouteMatch, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import PageContainer from '../../components/page-container/page-container';
import Container from '../../components/container/container';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferMark from '../../components/offer-mark/offer-mark';
import BookmarkButton, {BookmarkButtonType} from '../../components/bookmark-button/bookmark-button';
import OfferFeatures from '../../components/offer-features/offer-features';
import OfferFeature from '../../components/offer-features/components/offer-feature/offer-feature';
import OfferPrice from '../../components/offer-price/offer-price';
import OfferInside from '../../components/offer-inside/offer-inside';
import OfferHost from '../../components/offer-host/offer-host';
import Reviews from '../../components/reviews/reviews';
import Map from '../../components/map/map';
import Message from '../../components/message/message';
import OffersList, {OffersListType} from '../../components/offers-list/offers-list';
import * as OffersSelector from '../../redux/offers/offers-selectors';
import * as Type from '../../types';
import {AppPath, IdName, LoadStatus, LOADING_MESSAGE} from '../../const';
import RaitingStars from '../../components/raiting-stars/raiting-stars';


const ContainerType = {
  PAGE: `property`,
  GALLERY: `property__gallery`,
};

const FetureType = {
  ENTIRE: `entire`,
  BEDROOMS: `bedrooms`,
  ADULTS: `adults`,
};

const TypeName = {
  OFFER_PRICE: `property`,
  RAITING_STARS: `property__stars`,
  MARK: `property`,
};

const OFFER_CONTAINER_CLASS_NAME = `property__container`;

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
    <>
      <section className="property">
        <Container type={ContainerType.GALLERYx}>
          <OfferGallery images={images} />
        </Container>
        <Container className={OFFER_CONTAINER_CLASS_NAME}>
          <div className="property__wrapper">
            {isPremium && <OfferMark type={TypeName.MARK} />}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
              <BookmarkButton type={BookmarkButtonType.OFFER} mark={isFavorite} />
            </div>
            <div className="property__rating rating">
              <RaitingStars type={TypeName.RAITING_STARS} rate={rate} />
              <span className="property__rating-value rating__value">{rate}</span>
            </div>
            <OfferFeatures>
              <OfferFeature type={FetureType.ENTIRE} value={type} />
              <OfferFeature type={FetureType.BEDROOMS} value={`${bedroomsCount} Bedrooms`} />
              <OfferFeature type={FetureType.ADULTS} value={`Max ${adultsCount} adults`} />
            </OfferFeatures>
            <OfferPrice type={TypeName.OFFER_PRICE} price={price} />
            {features.length && <OfferInside features={features} />}
            <OfferHost host={host} description={description} />
            <Reviews reviews={reviews} />
          </div>
        </Container>
        <section className="property__map map">
          <Map />
        </section>
      </section>
        <Container>
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <OffersList type={OffersListType.NEAR} offers={offers.slice(0, 3)} />
          </section>
        </Container>

    </>
  );
};

const OfferPage = (props) => {
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
    <PageContainer type={ContainerType.PAGE}>
      {loader}
      {offerContent}
    </PageContainer>
  );
};

OfferPage.propTypes = {
  offersStatus: Type.OFFERS_STATUS,
  offers: Type.LIST_OFFERS,
  getOffer: Type.FUNCTION,
};


const mapStateToProps = (state) => ({
  offersStatus: OffersSelector.getOffersStatus(state),
  offers: OffersSelector.getSortedCityOffers(state),
  getOffer: (offerId) => OffersSelector.getOffer(state, offerId),
});


export {OfferPage};
export default connect(mapStateToProps)(OfferPage);
