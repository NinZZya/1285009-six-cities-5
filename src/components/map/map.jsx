import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import * as Type from '~/constants/types';


const PIN = leaflet.icon({
  iconUrl: `/img/pin.svg`,
});

const ACTIVE_PIN = leaflet.icon({
  iconUrl: `/img/pin-active.svg`,
});


const Map = (props) => {
  const {center, pins, activeId} = props;
  const mapRef = useRef(null);
  const layerRef = useRef(null);

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: center.coords,
      zoom: center.zoom,
      zoomControl: false,
      marker: true,
      layers: [
        leaflet
          .tileLayer(
              `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
              {
                attribution: `
                      &copy;
                      <a href="https://www.openstreetmap.org/copyright">
                          OpenStreetMap
                      </a> contributors &copy;
                      <a href="https://carto.com/attributions">
                        CARTO
                      </a>
                    `,
              }
          ),
      ]
    });

    layerRef.current = leaflet.layerGroup().addTo(mapRef.current);
  }, []);


  useEffect(() => {
    mapRef.current.setView(center.coords);
    layerRef.current.clearLayers();
    pins.forEach(({id, coords}) => {
      leaflet.marker(coords, {
        icon: id === activeId ?
          ACTIVE_PIN :
          PIN,
      })
      .addTo(layerRef.current);
    });
  }, [center, pins, activeId]);

  return (
    <div id="map" ref={mapRef} style={{height: `100%`}}></div>
  );
};


Map.propTypes = {
  center: Type.MAP_CENTER,
  pins: Type.MAP_PINS,
  activeId: Type.ID,
};

export default Map;
