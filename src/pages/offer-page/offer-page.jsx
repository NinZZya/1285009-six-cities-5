import React, {PureComponent} from 'react';
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
import NewReview from '../../components/reviews/components/new-review/new-review';
import Map from '../../components/map/map';
import Loader from '../../components/loader/loader';
import OffersList, {OffersListType} from '../../components/offers-list/offers-list';
import * as UserSelector from '../../reducer/user/user-selectors';
import * as OffersSelector from '../../reducer/offers/offers-selectors';
import * as ReviewsSelector from '../../reducer/reviews/reviews-selectors';
import * as ReviewsOperation from '../../reducer/reviews/reviews-operations';
import * as Type from '../../types';
import {AppPath, IdName, DataStatus, UserStatus} from '../../const';
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

class OfferPage extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderReviewCount(count) {
    return (
      <>
        &middot; <span className="reviews__amount">{count}</span>
      </>
    );
  }

  _getOfferContent() {
    const {
      userStatus, user,
      getNearOffers,
      reviews, reviewsStatus, addReview,
    } = this.props;

    const {
      id, images,
      isPremium, isFavorite,
      title, rate, type,
      bedroomsCount, adultsCount,
      features, price, host,
      description,
    } = this._offer;

    // Near offers (NEAR_OFFERS_COUNT) + 1 (active offer)
    const offers = getNearOffers(id).slice(0, NEAR_OFFERS_COUNT + 1);
    const count = reviews.length;
    const isAuth = userStatus === UserStatus.AUTH && user;

    const reviewsLoader = reviewsStatus === DataStatus.LOADING ?
      <Loader /> :
      null;

    const reviewsContent = (
      reviewsStatus !== DataStatus.LOADING && reviewsStatus !== DataStatus.ERROR
    ) ?
      <Reviews reviews={reviews} /> :
      null;

    const handelSubmitReview = (review) => {
      addReview(id, review);
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
              {features.length ? <OfferInside features={features} /> : null}
              <OfferHost host={host} description={description} />
              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                  Reviews {count ? this._renderReviewCount(count) : null}
                </h2>
                {reviewsLoader}
                {reviewsContent}
                {isAuth && (
                  <NewReview
                    user={user}
                    reviewsStatus={reviewsStatus}
                    onSubmitReview={handelSubmitReview}
                  />
                )}
              </section>
            </div>
          </Container>
          <section className="property__map map">
            <Map
              center={this._offer}
              pins={offers}
              activeId={this._offer.id}
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
  }

  componentDidMount() {
    const {loadReviews} = this.props;

    loadReviews(this._activeOfferId);
  }

  render() {
    const {
      offersStatus, getOffer, match,
    } = this.props;

    this._activeOfferId = getOfferId(match);
    this._offer = getOffer(this._activeOfferId);


    if (this._activeOfferId === -1 || (!this._offer && offersStatus === DataStatus.SUCCESS)) {
      return <Redirect to={AppPath.NOT_FOUND} />;
    }

    const loader = offersStatus === DataStatus.LOADING ?
      <Loader /> :
      null;

    const offerContent = offersStatus === DataStatus.SUCCESS ?
      this._getOfferContent() :
      null;

    return (
      <PageContainer type={ContainerType.PAGE}>
        {loader}
        {offerContent}
      </PageContainer>
    );
  }
}

OfferPage.propTypes = {
  offersStatus: Type.OFFERS_STATUS,
  getNearOffers: Type.FUNCTION,
  getOffer: Type.FUNCTION,
  reviewsStatus: Type.REVIEWS_STATUS,
  reviews: Type.REVIEWS,
  match: Type.MATCH,
  loadReviews: Type.FUNCTION,
  addReview: Type.FUNCTION,
  userStatus: Type.USER_STATUS,
  user: Type.USER,
};


const mapStateToProps = (state) => ({
  offersStatus: OffersSelector.getOffersStatus(state),
  getNearOffers: (offerId) => OffersSelector.getNearOffers(state, offerId),
  getOffer: (offerId) => OffersSelector.getOffer(state, offerId),
  reviewsStatus: ReviewsSelector.getReviewsStatus(state),
  reviews: ReviewsSelector.getReviews(state),
  userStatus: UserSelector.getUserStatus(state),
  user: UserSelector.getUser(state),
});

const mapDispatchToPorps = (dispatch) => ({
  loadReviews: (id) => {
    dispatch(ReviewsOperation.loadReviewsAsync(id));
  },
  addReview: (offerid, review) => {
    dispatch(ReviewsOperation.addReviewAsync(offerid, review));
  }
});


export {OfferPage};
export default connect(mapStateToProps, mapDispatchToPorps)(OfferPage);
