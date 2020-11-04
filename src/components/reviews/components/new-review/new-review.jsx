import React, {useState} from 'react';
import Star from './components/star/star';
import * as Type from '@/constants/types';
import {DataStatus, STARS} from '@/constants/const';
import {extend} from '@/utils/utils';


const MIN_CHARS_COUNT = 50;

const FormName = {
  REVIEW: `review`,
  RATE: `rating`,
};

const SubmitCaption = {
  SUBMIT: `Submit`,
  SENDING: `Sending...`,
};


const NewReview = (props) => {
  const {
    onSubmitReview,
    reviewsStatus,
  } = props;

  const [form, setFormValue] = useState({});

  const isReviewValid = form[FormName.REVIEW] ?
    form[FormName.REVIEW].length >= MIN_CHARS_COUNT :
    false;


  const isDisabled = !(form[FormName.RATE] && isReviewValid);

  const submitCaption = reviewsStatus === DataStatus.SENDING ?
    SubmitCaption.SENDING :
    SubmitCaption.SUBMIT;

  const handleFormValuesChange = (evt) => {
    setFormValue(extend(form, {
      [evt.target.name]: evt.target.value,
    }));
  };

  const onFormValuesReset = () => {
    setFormValue({});
  };

  const handelSubmitReview = (evt) => {
    evt.preventDefault();
    onSubmitReview({
      rate: form[FormName.RATE],
      text: form[FormName.REVIEW],
    });
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
            onStarChange={handleFormValuesChange}
          />))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name={FormName.REVIEW}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleFormValuesChange}
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
          {submitCaption}
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
  reviewsStatus: Type.DATA_STATUS,
};


export default NewReview;
