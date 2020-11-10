import React, {useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PageContainer from '../../page-container/page-container';
import Container from '../../container/container';
import OfferGallery from '../../offer-gallery/offer-gallery';
import OfferMark from '../../offer-mark/offer-mark';
import BookmarkButton, {BookmarkButtonType} from '../../bookmark-button/bookmark-button';
import RaitingStars from '../../raiting-stars/raiting-stars';
import OfferFeatures from '../../offer-features/offer-features';
import OfferFeature from '../../offer-features/components/offer-feature/offer-feature';
import OfferPrice from '../../offer-price/offer-price';
import OfferInside from '../../offer-inside/offer-inside';
import OfferHost from '../../offer-host/offer-host';
import Reviews from '../../reviews/reviews';
import NewReview from '../../reviews/components/new-review/new-review';
import Map from '../../map/map';
import LoadingData from '../../loading-data/loading-data';
import OffersList, {OffersListType} from '../../offers-list/offers-list';
import * as UserSelector from '../../../store/reducer/user/user-selectors';
import * as OffersOperation from '../../../store/reducer/offers/offers-operations';
import * as OffersSelector from '../../../store/reducer/offers/offers-selectors';
import * as Type from '../../../constants/types';
import {AppPath, IdName, DataStatus, UserStatus} from '../../../constants/const';
import {extend} from '../../../utils/utils';


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
  const matchId = match.params[IdName.OFFER];
  const isCoorectId = matchId ? matchId.slice(0, 2) !== `00` : false;
  const offerId = Number(matchId);

  return !isNaN(offerId) && isCoorectId ? offerId : -1;
};

const renderReviewCount = (count) => {
  return (
    <>
      &middot; <span className="reviews__amount">{count}</span>
    </>
  );
};

const getReviewsContent = (args) => {
  const {
    userStatus,
    user,
    reviewsStatus,
    reviews,
    handelSubmitReview,
  } = args;

  const count = reviews.length;
  const isAuth = userStatus === UserStatus.AUTH && user;

  const reviewsContent = (
    reviewsStatus !== DataStatus.LOADING && reviewsStatus !== DataStatus.ERROR
  ) ?
    <Reviews reviews={reviews} /> :
    null;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews {count ? renderReviewCount(count) : null}
      </h2>
      <LoadingData status={reviewsStatus} />
      {reviewsContent}
      {isAuth && (
        <NewReview
          reviewsStatus={reviewsStatus}
          onSubmitReview={handelSubmitReview}
        />
      )}
    </section>
  );
};

const getOfferContent = (args) => {
  const {
    offer,
    nearOffersStatus,
  } = args;

  const {
    images,
    isPremium,
    isFavorite,
    title,
    rate,
    type,
    bedroomsCount,
    adultsCount,
    features,
    price,
    host,
    description,
    coords,
    zoom,
  } = offer;

  const nearOffers = args.nearOffers.slice(0, NEAR_OFFERS_COUNT);
  const mapNearOffers = [...nearOffers, offer];
  const nearOffersContent = nearOffersStatus === DataStatus.SUCCESS ?
    <OffersList type={OffersListType.NEAR} offers={nearOffers} /> :
    null;

  const center = {
    coords,
    zoom,
  };

  return (
    <>
      <section className="property">
        <Container type={ContainerType.GALLERY}>
          <OfferGallery images={images} />
        </Container>
        <Container className={OFFER_CONTAINER_CLASS_NAME}>
          <div className="property__wrapper">
            {isPremium && <OfferMark type={TypeName.MARK} />}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
              <BookmarkButton
                type={BookmarkButtonType.OFFER}
                mark={isFavorite}
                offer={offer}
              />
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
            {features.length ? <OfferInside features={features} /> : null}
            <OfferHost host={host} description={description} />
            {getReviewsContent(args)}
          </div>
        </Container>
        <section className="property__map map">
          <Map
            center={center}
            pins={mapNearOffers}
            activeId={offer.id}
          />
        </section>
      </section>
      <Container>
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <LoadingData status={nearOffersStatus} />
          {nearOffersContent}
        </section>
      </Container>
    </>
  );
};

const OfferPage = (props) => {
  const {
    onLoadOffer,
    onLoadReviews,
    onLoadNearOffers,
    offerStatus,
    onGetOffer,
    onAddReview,
    match = {path: `/`},
  } = props;

  const activeOfferId = getOfferId(match);
  const offer = offerStatus === DataStatus.SUCCESS ?
    onGetOffer(activeOfferId) :
    null;

  if (activeOfferId === -1 || (!offer && offerStatus === DataStatus.SUCCESS)) {
    return <Redirect to={AppPath.NOT_FOUND} />;
  }

  useEffect(
      () => {
        onLoadOffer(activeOfferId);
        onLoadNearOffers(activeOfferId);
        onLoadReviews(activeOfferId);
      },
      [activeOfferId]
  );

  const handelSubmitReview = (review) => {
    onAddReview(activeOfferId, review);
  };

  const args = extend(props, {
    offer,
    handelSubmitReview,
  });

  const offerContent = offerStatus === DataStatus.SUCCESS ?
    getOfferContent(args) :
    null;

  return (
    <PageContainer type={ContainerType.PAGE}>
      <LoadingData status={offerStatus} />
      {offerContent}
    </PageContainer>
  );
};

OfferPage.propTypes = {
  offerStatus: Type.DATA_STATUS,
  onGetOffer: Type.FUNCTION,
  nearOffers: Type.LIST_OFFERS,
  nearOffersStatus: Type.DATA_STATUS,
  reviewsStatus: Type.DATA_STATUS,
  reviews: Type.REVIEWS,
  match: Type.MATCH,
  onLoadOffer: Type.FUNCTION,
  onLoadReviews: Type.FUNCTION,
  onLoadNearOffers: Type.FUNCTION,
  onAddReview: Type.FUNCTION,
  userStatus: Type.USER_STATUS,
  user: Type.USER,
};


const mapStateToProps = (state) => ({
  offerStatus: OffersSelector.getOfferStatus(state),
  onGetOffer: (id) => OffersSelector.getOffer(state, id),
  nearOffers: OffersSelector.getNearOffers(state),
  nearOffersStatus: OffersSelector.getNearOffersStatus(state),
  reviewsStatus: OffersSelector.getOfferReviewsStatus(state),
  reviews: OffersSelector.getOfferReviews(state),
  userStatus: UserSelector.getUserStatus(state),
  user: UserSelector.getUser(state),
});

const mapDispatchToPorps = (dispatch) => ({
  onLoadOffer: (id) => {
    dispatch(OffersOperation.loadOfferAsync(id));
  },
  onLoadReviews: (id) => {
    dispatch(OffersOperation.loadOfferReviewsAsync(id));
  },
  onLoadNearOffers: (id) => {
    dispatch(OffersOperation.loadNearOffersAsync(id));
  },
  onAddReview: (id, review) => {
    dispatch(OffersOperation.addOfferReviewAsync(id, review));
  },
});


export {OfferPage};
export default connect(mapStateToProps, mapDispatchToPorps)(OfferPage);
