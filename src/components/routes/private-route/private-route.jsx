import React, {Children} from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import {getUserStatus} from '@/reducer/user/user-selectors.js';
import * as Type from '@/types';
import {AppPath, UserStatus} from '@/const';


const PrivateRoute = (props) => {
  const {userStatus, path, exact, children} = props;

  if (userStatus === UserStatus.AUTH && path === AppPath.LOGIN) {
    return <Redirect to={AppPath.ROOT} />;
  }

  if (userStatus !== UserStatus.AUTH && path !== AppPath.LOGIN) {
    return <Redirect to={AppPath.LOGIN} />;
  }

  return (
    <Route
      path={path}
      exact={exact}
    >
      {Children.map(children, ((child) => child))}
    </Route>
  );
};

PrivateRoute.propTypes = {
  userStatus: Type.USER_STATUS,
  path: Type.PATH,
  exact: Type.EXACT,
  children: Type.CHILDREN,
};


const mapStateToProps = (state) => {
  return {
    userStatus: getUserStatus(state),
  };
};


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
