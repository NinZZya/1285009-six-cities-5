import React from 'react';
import {TCity, TCityId} from '../../../../types';

const Tab = ({city, activeCityId}) => {
  const {id, name} = city;
  return (
    <li className="locations__item">
      <a
        className={
          `locations__item-link tabs__item ${
            activeCityId === id && `tabs__item--active`
          }`
        }
        href="#"
      >
        <span>{name}</span>
      </a>
    </li>
  );
};

Tab.propTypes = {
  city: TCity,
  activeCityId: TCityId,
};

export default Tab;
