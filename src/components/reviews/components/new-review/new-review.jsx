import React from 'react';
import Star from './components/star/star';
import witForm from '../../../../hocs/with-form/with-form';
import * as Type from '../../../../types';
import {STARS} from '../../../../const';


const MIN_CHARS_COUNT = 5;
const FormName = {
  REVIEW: `review`,
  RATE: `rating`,
};


const NewReview = (props) => {
  const {
    form, onFormChange, onFormReset,
    onSubmitReview,
  } = props;

  const isReviewValid = form[FormName.REVIEW] ?
    form[FormName.REVIEW].length >= MIN_CHARS_COUNT :
    false;


  const isDisabled = !(form[FormName.RATE] && isReviewValid);

  const handelSubmitReview = (evt) => {
    evt.preventDefault();
    onSubmitReview();
    onFormReset();
    evt.target.reset();
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handelSubmitReview}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {STARS.map((star, index) => (
          <Star
            star={star}
            key={`star-review-${index}`}
            onStarChange={onFormChange}
          />))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name={FormName.REVIEW}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={onFormChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating </span>
          and describe your stay with at least <b className="reviews__text-amount">
            {`${MIN_CHARS_COUNT} characters`}
          </b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

NewReview.propTypes = {
  form: Type.FORM,
  onFormChange: Type.FUNCTION,
  onFormReset: Type.FUNCTION,
  onSubmitReview: Type.FUNCTION,
};


export default witForm(NewReview);
