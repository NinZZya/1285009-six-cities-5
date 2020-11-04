import React from 'react';
import * as Type from '@/types';


const OfferGallery = ({images = []}) => {
  return (
    <div className="property__gallery">
      {images.map((image, index) => (
        <div className="property__image-wrapper" key={`gallery-item${index}`} >
          <img className="property__image" src={image} alt="Photo studio">
          </img>
        </div>
      ))}
    </div>
  );
};


OfferGallery.propTypes = {
  images: Type.OFFER_IMAGES,
};

export default OfferGallery;
