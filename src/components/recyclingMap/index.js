import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { geolocated } from "react-geolocated";
import icons from "./icons";
import locations from "../../locations.json";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

class RecyclingMap extends Component {
  constructor() {
    super();
    this.state = {
      zoom: 12,
      filters: []
    };
  }

  handleFilter = filter => {
    let filtersCopy = [...this.state.filters];

    if (this.state.filters.indexOf(filter) === -1) {
      filtersCopy.push(filter);
    } else {
      filtersCopy = filtersCopy.filter(filterVal => filterVal !== filter);
    }
    this.setState({ filters: filtersCopy });
  };

  render() {
    console.log(icons);
    return (
      this.props.coords && (
        <>
          <div>
            <div>
              <Map
                center={[
                  this.props.coords.latitude,
                  this.props.coords.longitude
                ]}
                zoom={this.state.zoom}
              >
                <TileLayer
                  url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
                />
                <Marker
                  draggable={this.state.draggable}
                  onDragend={this.updatePosition}
                  position={[
                    this.props.coords.latitude,
                    this.props.coords.longitude
                  ]}
                  icon={icons.home}
                  ref={this.refmarker}
                >
                  <Popup minWidth={90}>
                    <span onClick={this.toggleDraggable}>You are here</span>
                  </Popup>
                </Marker>
                {locations.map((location, i) => {
                  if (this.state.filters.includes(location.style))
                    return (
                      <Marker
                        key={`${location.name}-${i}`}
                        draggable={false}
                        position={[location.latitude, location.longitude]}
                        icon={icons[location.style]}
                      >
                        <Popup minWidth={90}>
                          <span onClick={this.toggleDraggable}>
                            {location.name} <br />
                            {location.address} <br />
                            {location.city}
                            <br />
                            {location.state}
                            <br />
                            {location.zip}
                          </span>
                        </Popup>
                      </Marker>
                    );
                })}
              </Map>
            </div>
            <div>
              {Object.keys(icons).map(icon => {
                return (
                  <span
                    onClick={() => this.handleFilter(icons[icon].options.name)}
                  >
                    <img src={icons[icon].options.iconUrl} />{" "}
                    {icons[icon].options.name}
                  </span>
                );
              })}
            </div>
          </div>
        </>
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
