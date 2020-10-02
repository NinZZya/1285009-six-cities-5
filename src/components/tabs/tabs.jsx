import React from 'react';
import Tab from './components/tab/tab';
import {CITIES} from '../../const';
import {TCityId} from '../../types';

const Tabs = ({activeCityId}) => {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(CITIES).map((city) => (
            <Tab key={city.id} city={city} activeCityId={activeCityId} />
          ))}
        </ul>
      </section>
    </div>
  );
};

Tabs.propTypes = {
  activeCityId: TCityId,
};

export default Tabs;
