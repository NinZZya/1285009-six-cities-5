import React from 'react';
import {Link} from 'react-router-dom';
import {AppPath} from '../../const';


const PageNotFound = () => {
  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <div className="login">
          <h1 className="login__title">Page not found</h1>
          <p>
            Click button to visit the main page
          </p>
          <p>
            <Link to={AppPath.ROOT} className="button form__submit">
              Go to the main page
            </Link>
          </p>
        </div>
      </div>

    </main>
  );
};


export default PageNotFound;
