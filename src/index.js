import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './components/app/app';

const ACTIVE_SITY_ID = 1;

ReactDOM.render(
    <Router>
      <App activeCityId={ACTIVE_SITY_ID} />
    </Router>,
    document.querySelector(`#root`)
);
