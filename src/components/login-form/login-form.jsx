import React, {PureComponent} from 'react';
import * as Type from '../../types';
import {UserStatus} from '../../const';


const errorStyle = {
  color: `#ff0000`,
  fontSize: `12px`,
};

const getErrorContent = (error) => {
  return (
    <p style={errorStyle}>
      {`ERROR: ${error ? error : `Authorization error`}`}
    </p>
  );
};
class LoginForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: ``,
      password: ``,
    };
  }

  render() {
    const {
      onAuth,
      userStatus,
      error,
    } = this.props;

    const {email, password} = this.state;

    const isDisabled = userStatus === UserStatus.RESPONSE;
    const errorContent = userStatus === UserStatus.AUTH_ERROR ?
      getErrorContent(error) :
      null;

    return (
      <form
        className="login__form form"
        action="#"
        method="post"
        onSubmit={(evt) => {
          evt.preventDefault();
          onAuth({email, password});
        }}
      >
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input
            className="login__input form__input"
            type="email" name="email"
            placeholder="Email"
            required=""
            disabled={isDisabled}
            onChange={(evt) => {
              evt.preventDefault();
              this.setState({email: evt.target.value});
            }}
          >
          </input>
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input
            className="login__input form__input"
            type="password"
            name="password"
            placeholder="Password"
            required=""
            disabled={isDisabled}
            onChange={(evt) => {
              evt.preventDefault();
              this.setState({password: evt.target.value});
            }}
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
  }
}

LoginForm.propTypes = {
  onAuth: Type.FUNCTION,
  userStatus: Type.USER_STATUS,
  error: Type.USER_ERROR,
};


export default LoginForm;
