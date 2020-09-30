import React from 'react';

const OfferInside = () => {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {new Array(6).fill(``).map((_, index) => {
          return (
            <li className="property__inside-item" key={`iside-item-${index}`}>
              Wi-Fi
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OfferInside;
