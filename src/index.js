import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import App from './app/app';
import store from './store';
import history from './history';
import {loadOffersAsync} from './reducer/offers/offers-operations';


store.dispatch(loadOffersAsync());

ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    document.querySelector(`#root`)
);
