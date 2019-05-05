import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { geolocated } from "react-geolocated";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class RecyclingMap extends Component {
  constructor() {
    super();
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 15
    };
  }

  render() {
    return (
      this.props.coords && (
        <Map
          center={[this.props.coords.latitude, this.props.coords.longitude]}
          zoom={this.state.zoom}
        >
          <TileLayer
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
          />
          <Marker
            draggable={this.state.draggable}
            onDragend={this.updatePosition}
            position={[this.props.coords.latitude, this.props.coords.longitude]}
            ref={this.refmarker}
          >
            <Popup minWidth={90}>
              <span onClick={this.toggleDraggable}>
                {this.state.draggable ? "DRAG MARKER" : "MARKER FIXED"}
              </span>
            </Popup>
          </Marker>
        </Map>
      )
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(RecyclingMap);
