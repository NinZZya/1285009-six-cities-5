import React from 'react';
import * as Type from '../../../../../../types';

const Star = (props) => {
  const {star, onStarChange} = props;
  const {value, title} = star;

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}-stars`}
        type="radio"
        onChange={onStarChange}
      >
      </input>
      <label
        htmlFor={`${value}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
};

Star.propTypes = {
  star: Type.STAR,
  onStarChange: Type.FUNCTION,
};

export default Star;
