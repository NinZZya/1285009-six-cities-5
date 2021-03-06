import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import App from './components/app/app';
import store from './store/store';
import history from './constants/history';
import {loadOffersAsync} from './store/reducer/offers/offers-operations';
import {checkAuthAsync} from './store/reducer/user/user-operations';


Promise.all([
  store.dispatch(loadOffersAsync()),
  store.dispatch(checkAuthAsync()),
]);

ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    document.querySelector(`#root`)
);
