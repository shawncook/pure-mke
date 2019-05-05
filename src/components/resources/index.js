import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default class Resources extends React.PureComponent {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Resources - pureMKE</title>
          <meta name="description" content="Pure MKE Resources page" />
        </Helmet>
        <div className="app">
          <p>Content</p>
          <p>
            <Link to="https://city.milwaukee.gov/mpw/divisions/operations/environmental/sanitation/DropOff#.XM79l5NKgWo">Drop Off Locations</Link>
          </p>
          <p>
            <Link to="https://city.milwaukee.gov/mpw/divisions/operations/sanitationoperations#.XM79q5NKgWo">Milwaukee Sanitation Services</Link>
          </p>
          <p>
            <Link to="https://city.milwaukee.gov/mpw/divisions/operations/environmental/sanitation/GarbageRecyclingSchedules.htm#.XM79wJNKgWo">Find you Recycling Pick Up Date</Link>
          </p>
          <p>
            <Link to="https://city.milwaukee.gov/recycles">City of Milwaukee Recycling Info Page</Link>
          </p>
        </div>
      </Fragment>
    );
  }
}
