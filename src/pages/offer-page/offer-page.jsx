import React from 'react';
import {Redirect} from 'react-router-dom';
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


const NEAR_OFFERS_COUNT = 3;
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

const getOfferContent = (offer, getNearOffers, reviews, reviewsStatus) => {
  const {
    id,
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
  } = offer;

  // Near offers (NEAR_OFFERS_COUNT) + 1 (active offer)
  const offers = getNearOffers(id).slice(0, NEAR_OFFERS_COUNT + 1);

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
            <Reviews reviews={reviews} reviewsStatus={reviewsStatus} />
          </div>
        </Container>
        <section className="property__map map">
          <Map
            center={offer}
            pins={offers}
            activeId={offer.id}
          />
        </section>
      </section>
        <Container>
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <OffersList type={OffersListType.NEAR} offers={offers.slice(1, NEAR_OFFERS_COUNT + 1)} />
          </section>
        </Container>

    </>
  );
};

const OfferPage = (props) => {
  const {
    offersStatus, getOffer, getNearOffers,
    reviews, reviewsStatus,
    match,
  } = props;

  const activeOfferId = getOfferId(match);


  const offer = getOffer(activeOfferId);

  if (activeOfferId === -1 || (!offer && offersStatus === LoadStatus.SUCCESS)) {
    return <Redirect to={AppPath.NOT_FOUND} />;
  }

  const loader = offersStatus === LoadStatus.LOADING ?
    <Message title={LOADING_MESSAGE} /> :
    null;
  const offerContent = offersStatus === LoadStatus.SUCCESS ?
    getOfferContent(offer, getNearOffers, reviews, reviewsStatus) :
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
  getNearOffers: Type.FUNCTION,
  getOffer: Type.FUNCTION,
  reviewsStatus: Type.REVIEWS_STATUS,
  reviews: Type.REVIEWS,
  match: Type.MATCH,
};


const mapStateToProps = (state) => ({
  offersStatus: OffersSelector.getOffersStatus(state),
  getNearOffers: (offerId) => OffersSelector.getNearOffers(state, offerId),
  getOffer: (offerId) => OffersSelector.getOffer(state, offerId),
  reviewsStatus: OffersSelector.getReviewsStatus(state),
  reviews: OffersSelector.getReviews(state),
});


export {OfferPage};
export default connect(mapStateToProps)(OfferPage);
