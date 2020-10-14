import React from 'react';
import Star from './components/star/star';
import withFormValues from '../../../../hocs/with-form-values/with-form-values';
import * as Type from '../../../../types';
import {STARS} from '../../../../const';


const MIN_CHARS_COUNT = 50;
const FormName = {
  REVIEW: `review`,
  RATE: `rating`,
};


const NewReview = (props) => {
  const {
    form, onFormValuesChange, onFormValuesReset,
    onSubmitReview,
  } = props;

  const isReviewValid = form[FormName.REVIEW] ?
    form[FormName.REVIEW].length >= MIN_CHARS_COUNT :
    false;


  const isDisabled = !(form[FormName.RATE] && isReviewValid);

  const handelSubmitReview = (evt) => {
    evt.preventDefault();
    onSubmitReview();
    onFormValuesReset();
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
            onStarChange={onFormValuesChange}
          />))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name={FormName.REVIEW}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={onFormValuesChange}
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
  onFormValuesChange: Type.FUNCTION,
  onFormValuesReset: Type.FUNCTION,
  onSubmitReview: Type.FUNCTION,
};


export default withFormValues(NewReview);
