import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";

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
    const stamenTonerTiles =
      "http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png";
    const stamenTonerAttr =
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
    const mapCenter = [39.9528, -75.1638];
    const zoomLevel = 12;
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={mapCenter} zoom={zoomLevel}>
        <TileLayer attribution={stamenTonerAttr} url={stamenTonerTiles} />
      </Map>
    );
  }
}

export default RecyclingMap;
