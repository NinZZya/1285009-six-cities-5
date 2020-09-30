import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const ACTIVE_SITY_ID = 1;

ReactDOM.render(
    <App activeCityId={ACTIVE_SITY_ID} />,
    document.querySelector(`#root`)
);
