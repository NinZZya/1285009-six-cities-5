import React from 'react';
import RaitingStars from '../../../raiting-stars/raiting-stars';
import * as Type from '../../../../constants/types';
import {DEFAULT_AVATAR} from '../../../../constants/const';
import {convertToReviewDate} from '../../../../utils/utils';


const RAITING_STARS_TYPE = `reviews__stars`;

const Review = ({review}) => {
  const {
    user,
    rate,
    text,
    date,
  } = review;

  const dateCaption = convertToReviewDate(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatar ? user.avatar : DEFAULT_AVATAR}
            width="54"
            height="54"
            alt="Reviews avatar"
          >
          </img>
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <RaitingStars type={RAITING_STARS_TYPE} rate={rate} />
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime={date}>
          {dateCaption}
        </time>
      </div>
    </li>
  );
};

Review.propTypes = {
  review: Type.REVIEW,
};


export default Review;
