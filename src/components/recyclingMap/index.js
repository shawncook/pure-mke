import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { geolocated } from "react-geolocated";

class RecyclingMap extends Component {
  constructor() {
    super();
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13
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
            position={[this.props.coords.latitude, this.props.coords.longitude]}
          >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
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
