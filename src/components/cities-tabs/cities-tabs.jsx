import React from 'react';
import CitiesTab from './components/cities-tab/cities-tab';
import {CITIES} from '../../const';
import * as Type from '../../types';


const cities = Object.values(CITIES);

const CitiesTabs = (props) => {
  const {
    activeCityId,
  } = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <CitiesTab
              key={`tab-${city.id}`}
              activeCityId={activeCityId}
              city={city}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

CitiesTabs.propTypes = {
  activeCityId: Type.ID,
  renderItems: Type.FUNCTION,
};


export default CitiesTabs;
