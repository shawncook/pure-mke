import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

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
            <a target="_blank" href="https://city.milwaukee.gov/mpw/divisions/operations/environmental/sanitation/DropOff#.XM79l5NKgWo">Drop Off Locations</a>
          </p>
          <p>
            <a target="_blank" href="https://city.milwaukee.gov/mpw/divisions/operations/sanitationoperations#.XM79q5NKgWo">Milwaukee Sanitation Services</a>
          </p>
          <p>
            <a target="_blank" href="https://city.milwaukee.gov/mpw/divisions/operations/environmental/sanitation/GarbageRecyclingSchedules.htm#.XM79wJNKgWo">Find you Recycling Pick Up Date</a>
          </p>
          <p>
            <a target="_blank" href="https://city.milwaukee.gov/recycles">City of Milwaukee Recycling Info Page</a>
          </p>
        </div>
      </Fragment>
    );
  }
}
