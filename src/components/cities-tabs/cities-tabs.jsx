import React from 'react';
import CitiesTab from './components/cities-tab/cities-tab';
import * as Type from '../../constants/types';


const CitiesTabs = (props) => {
  const {
    activeCityId,
  } = props;

  const cities = Object.values(props.cities);

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
  cities: Type.CITIES,
};


export default CitiesTabs;
