import React from 'react';
import {useLocation} from 'react-router-dom';
import {connect} from 'react-redux';
import AppRoute from '~/components/routes/app-route/app-route';
import {getUser, getUserStatus} from '~/store/reducer/user/user-selectors';
import * as Type from '~/constants/types';
import {AppPath} from '~/constants/const';


const PathToClassName = {
  [AppPath.ROOT]: `page--gray page--main`,
  [AppPath.CITY]: `page--gray page--main`,
  [AppPath.LOGIN]: `page--gray page--login`,
  [AppPath.FAVORITES]: ``,
  [AppPath.OFFER]: ``,
  [AppPath.NOT_FOUND]: `page--gray page--main`,
};

const getPage = (path) => {
  const pathArgs = path.split(`/`);

  return pathArgs.length === 1 ? `/` : `/${pathArgs[1]}`;
};

const App = (props) => {
  const {userStatus, user} = props;
  const location = useLocation();
  const pathname = location ? location.pathname : ``;
  const page = getPage(pathname);

  return (
    <div
      className={`page ${PathToClassName[page]}`}
    >
      <AppRoute
        userStatus={userStatus}
        user={user}
      />
    </div>
  );
};

App.propTypes = {
  userStatus: Type.USER_STATUS,
  user: Type.USER,
};

const mapStateToProps = (state) => ({
  userStatus: getUserStatus(state),
  user: getUser(state),
});


export {App};
export default connect(mapStateToProps)(App);
