import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PageContainer from '../../components/page-container/page-container';
import Container from '../../components/container/container';
import LoginForm from '../../components/login-form/login-form';
import {authUserAsync} from '../../reducer/user/user-operations';
import * as UserAction from '../../reducer/user/user-actions';
import * as OfferSelector from '../../reducer/offers/offers-selectors';
import * as UserSelector from '../../reducer/user/user-selectors';
import * as Type from '../../types';
import {AppPath, CITIES, UserStatus} from '../../const';


const ContainerType = {
  PAGE: `login`,
  LOGIN: `page__login`,
};

const LoginPage = (props) => {
  const {
    activeCityId,
    userStatus,
    error,
    autUser,
    changeUserStatus,
  } = props;
  const city = CITIES[activeCityId];
  const cityPath = `${AppPath.CITY}/${activeCityId}`;

  return (
    <PageContainer type={ContainerType.PAGE}>
      <Container type={ContainerType.LOGIN}>
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <LoginForm
            onAuth={(authData) => {
              changeUserStatus(UserStatus.RESPONSE);
              autUser(authData);
            }}
            error={error}
            userStatus={userStatus}
          />
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link to={cityPath} className="locations__item-link">
              <span>{city.name}</span>
            </Link>
          </div>
        </section>
      </Container>
    </PageContainer>
  );
};

LoginPage.propTypes = {
  activeCityId: Type.ID,
  userStatus: Type.USER_STATUS,
  error: Type.USER_ERROR,
  autUser: Type.FUNCTION,
  changeUserStatus: Type.FUNCTION,
};

const mapStateToProps = (state) => ({
  activeCityId: OfferSelector.getActiveCityId(state),
  userStatus: UserSelector.getUserStatus(state),
  error: UserSelector.getError(state),
});

const mapDispatchToProps = (dispatch) => ({
  autUser: (authData) => {
    dispatch(authUserAsync(authData));
  },
  changeUserStatus: (userStatus) => {
    dispatch(UserAction.changeUserStatus(userStatus));
  },
});


export {LoginPage};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
