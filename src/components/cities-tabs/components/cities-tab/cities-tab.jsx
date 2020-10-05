import React from 'react';
import {Link} from 'react-router-dom';
import {AppPath} from '../../../../const';
import * as Type from '../../../../types';


const CitiesTab = ({city, activeCityId}) => {
  const {id, name} = city;
  return (
    <li className="locations__item">
      <Link
        to={`${AppPath.CITY}/${city.id}`}
        className={
          `locations__item-link tabs__item ${
            activeCityId === id ? `tabs__item--active` : ``
          }`
        }
        href="#"
      >
        <span>{name}</span>
      </Link>
    </li>
  );
};

CitiesTab.propTypes = {
  city: Type.CITY,
  activeCityId: Type.ID,
};


export default CitiesTab;
