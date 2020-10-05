import React from 'react';
import * as Type from '../../../../types';

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
  city: Type.city,
  activeCityId: Type.id,
};

export default Tab;
