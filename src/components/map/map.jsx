import React, {PureComponent} from 'react';
import leaflet from 'leaflet';
import * as Type from '../../types';

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = React.createRef();

    this._layer = null;

    this._pin = leaflet.icon({
      iconUrl: `/img/pin.svg`,
    });

    this._activePin = leaflet.icon({
      iconUrl: `/img/pin-active.svg`,
    });

    this._zoom = 13;
  }

  _createPin(coords) {
    return leaflet
    .marker(coords, {
      icon: this._pin,
    });
  }

  _addPins() {
    const pins = this.props.pins.reduce((items, {coords}) => {
      const pin = this._createPin(coords);
      items.push(pin);
      return items;
    }, []);

    if (this._layer) {
      this._layer.remove();
    }

    this._layer = leaflet.layerGroup(pins);
    this._layer.addTo(this._map);
  }

  componentDidUpdate(prevProps) {
    if (this.props.center.coords !== prevProps.center.coords) {
      this._map.setView(this.props.center.coords);
      this._addPins();
    }
  }

  componentDidMount() {
    const {center} = this.props;
    this._map = leaflet.map(this._mapRef.current, {
      center: center.coords,
      zoom: this._zoom,
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

    this._addPins();
  }

  render() {
    return (
      <div id="map" ref={this._mapRef} style={{height: `100%`}}></div>
    );
  }
}


Map.propTypes = {
  center: Type.MAP_CENTER,
  pins: Type.MAP_PINS,
};

export default Map;
