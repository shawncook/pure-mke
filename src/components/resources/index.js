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
            <Link to="/">Sample URL</Link>
          </p>
        </div>
      </Fragment>
    );
  }
}
