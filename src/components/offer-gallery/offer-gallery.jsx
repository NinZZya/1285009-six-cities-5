import React from 'react';
import GalleryItem from './components/gallery-item';

const OfferGallery = () => {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {new Array(6).fill(``).map((_, index) => <GalleryItem key={`gallery-item${index}`} />)}
      </div>
    </div>
  );
};

export default OfferGallery;
