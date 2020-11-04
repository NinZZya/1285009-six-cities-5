import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PageContainer from '@components/page-container/page-container';
import Container from '@components/container/container';
import LoginForm from '@components/login-form/login-form';
import {authAsync} from '@reducer/user/user-operations';
import * as UserAction from '@reducer/user/user-actions';
import * as UserSelector from '@reducer/user/user-selectors';
import * as CitiesSelector from '@reducer/cities/cities-selectors';
import * as Type from '@/constants/types';
import {AppPath, UserStatus} from '@/constants/const';


const ContainerType = {
  PAGE: `login`,
  LOGIN: `page__login`,
};

const LoginPage = (props) => {
  const {
    activeCityId,
    userStatus,
    error,
    cities,
    auth,
    changeUserStatus,
  } = props;

  const city = cities[activeCityId];
  const cityPath = `${AppPath.CITY}/${activeCityId}`;

  return (
    <PageContainer type={ContainerType.PAGE}>
      <Container type={ContainerType.LOGIN}>
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <LoginForm
            onAuth={(authData) => {
              changeUserStatus(UserStatus.RESPONSE);
              auth(authData);
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
  cities: Type.CITIES,
  auth: Type.FUNCTION,
  changeUserStatus: Type.FUNCTION,
};

const mapStateToProps = (state) => ({
  activeCityId: CitiesSelector.getActiveCityId(state),
  cities: CitiesSelector.getCities(state),
  userStatus: UserSelector.getUserStatus(state),
  error: UserSelector.getError(state),
});

const mapDispatchToProps = (dispatch) => ({
  auth: (authData) => {
    dispatch(authAsync(authData));
  },
  changeUserStatus: (userStatus) => {
    dispatch(UserAction.changeUserStatus(userStatus));
  },
});


export {LoginPage};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
