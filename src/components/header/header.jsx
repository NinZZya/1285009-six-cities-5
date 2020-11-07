import React from 'react';
import {Link} from 'react-router-dom';
import * as Type from '../../constants/types';
import {AppPath, UserStatus} from '../../constants/const';


const Header = ({userStatus = UserStatus.NO_AUTH, user = {}}) => {
  const isAuth = userStatus === UserStatus.AUTH;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              className="header__logo-link header__logo-link--active"
              to={AppPath.ROOT}
            >
              <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"></img>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link
                  className="header__nav-link header__nav-link--profile"
                  to={isAuth ? AppPath.FAVORITES : AppPath.LOGIN}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">
                    {isAuth ? user.email : `Sign in`}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  userStatus: Type.USER_STATUS,
  user: Type.USER,
};


export default Header;
