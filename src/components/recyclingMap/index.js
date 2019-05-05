import React, { Fragment, Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { geolocated } from "react-geolocated";
import icons from "./icons";
import { Helmet } from "react-helmet";
import locations from "../../locations.json";
import "./map.scss";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { ReactComponent as LoadingSpinner } from "../../img/spinner.svg";

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
      loading: true,
      zoom: 11,
      filters: []
    };
  }

  componentDidMount() {
    if (
      this.props.history &&
      this.props.history.location &&
      this.props.history.location.state &&
      this.props.history.location.state.prefilters
    ) {
      this.setState({ filters: this.props.history.location.state.prefilters });
    } else {
      this.setState({ filters: [...Object.keys(icons)] })
    }
  }

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    if (
      this.props.history &&
      this.props.history.location &&
      this.props.history.location.state &&
      this.props.history.location.state.prefilters !==
        nextProps.history.location.state.prefilters
    ) {
      this.setState({ filters: this.props.history.location.state.prefilters });
    }
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
    const {
      loading,
    } = this.state;
    return (
      <Fragment>
        <Helmet>
          <title>Recycling Map - pureMKE</title>
          <meta
            name="description"
            content="Find a location near you to dispose of your recyclable materials."
          />
        </Helmet>
        {! this.props.coords ? (
          <div className="app__loading">
            <LoadingSpinner />
          </div>
        ) : (
          <Fragment>
            <div className="app__filters">
              <ul className="app__filter-list">
                {Object.keys(icons).map(icon => {
                  return (
                    icon !== "home" && (
                      <li key={icon} className={`app__filter-item ${this.state.filters.includes(icon) && "active"}`}>
                        <button
                          className="app__filter-button"
                          onClick={() =>
                            this.handleFilter(icons[icon].options.name)
                          }
                        >
                          <img
                            alt={icons[icon].options.displayName}
                            src={icons[icon].options.iconUrl}
                          />
                          {icons[icon].options.displayName}
                        </button>
                      </li>
                    )
                  );
                })}
              </ul>
            </div>
            <div className="app__map">
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
                  return (
                    this.state.filters.includes(location.style) && (
                      <Marker
                        className="marker"
                        key={`${location.name}-${i}`}
                        draggable={false}
                        position={[location.latitude, location.longitude]}
                        icon={icons[location.style]}
                      >
                        <Popup minWidth={90}>
                          <span onClick={this.toggleDraggable}>
                            <div className="marker__title">
                              <strong>{location.name} </strong>
                            </div>
                            <address className="marker__address">
                              {location.address} <br />
                              {location.city}, {location.state}&nbsp;
                              {location.zip}
                            </address>
                            <a
                              className="marker__link"
                              href={location.website}
                              target="_blank"
                            >
                              Website
                            </a>
                          </span>
                        </Popup>
                      </Marker>
                    )
                  );
                })}
              </Map>
            </div>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(RecyclingMap);
