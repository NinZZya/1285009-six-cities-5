import React from 'react';
import * as Type from '../../../../types';
import {calcRatePercent, dateFormatter} from '../../../../utils/utils';


const Review = ({review}) => {
  const {
    user,
    rate,
    text,
    date,
  } = review;

  const dateCaption = dateFormatter.format(new Date(date));

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatar}
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
          <div className="reviews__stars rating__stars">
            <span style={{width: `${calcRatePercent(rate)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
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
