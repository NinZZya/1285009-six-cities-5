import React from 'react';
import * as Type from '../../constants/types';
import {UserStatus} from '../../constants/const';


const errorStyle = {
  color: `#ff0000`,
  fontSize: `12px`,
};

export const FormName = {
  EMAIL: `email`,
  PASSWORD: `password`,
};

const getErrorContent = (error) => {
  return (
    <p style={errorStyle}>
      {error}
    </p>
  );
};

const LoginForm = (props) => {
  const {
    onAuth,
    userStatus,
    error,
  } = props;

  const isDisabled = userStatus === UserStatus.RESPONSE;
  const errorContent = userStatus === UserStatus.AUTH_ERROR ?
    getErrorContent(error) :
    null;

  const onLoginFormSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const authData = {
      email: formData.get(FormName.EMAIL),
      password: formData.get(FormName.PASSWORD),
    };
    onAuth(authData);
  };

  return (
    <form
      className="login__form form"
      action="#"
      method="post"
      onSubmit={onLoginFormSubmit}
    >
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          className="login__input form__input"
          type="email"
          name={FormName.EMAIL}
          placeholder="Email"
          required=""
          disabled={isDisabled}
        >
        </input>
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input
          className="login__input form__input"
          type="password"
          name={FormName.PASSWORD}
          placeholder="Password"
          required=""
          disabled={isDisabled}
        >
        </input>
      </div>
      <button
        className="login__submit form__submit button"
        type="submit"
        disabled={isDisabled}
      >
        Sign in
      </button>
      {errorContent}
    </form>
  );
};

LoginForm.propTypes = {
  onAuth: Type.FUNCTION,
  userStatus: Type.USER_STATUS,
  error: Type.USER_ERROR,
};


export default LoginForm;
