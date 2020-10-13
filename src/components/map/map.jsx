import React, {PureComponent} from 'react';
import leaflet from 'leaflet';


class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = React.createRef();

    this._pin = leaflet.icon({
      iconUrl: `/img/pin.svg`,
    });

    this._activePin = leaflet.icon({
      iconUrl: `/img/pin-active.svg`,
    });
  }

  componentDidMount() {
    this._map = leaflet.map(this._mapRef.current, {
      center: [48.864716, 2.349014],
      zoom: 13,
      zoomControl: false,
      marker: true,
    });

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
      )
      .addTo(this._map);

    leaflet
      .marker([48.864716, 2.349014], {
        icon: this._activePin,
      }).addTo(this._map);

    leaflet
      .marker([48.884716, 2.339014], {
        icon: this._pin,
      }).addTo(this._map);
  }

  render() {
    return (
      <div id="map" ref={this._mapRef} style={{height: `100%`}}></div>
    );
  }
}


export default Map;
