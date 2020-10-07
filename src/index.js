import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './app/app';
import store from './store';
import {loadOffersAsync} from './redux/offers/offers-operations';


store.dispatch(loadOffersAsync());

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.querySelector(`#root`)
);
