import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ElasticSearch from './../elasticSearch/index';

class Routes extends Component {
  state = {  }
  render() { 
    return (
      <Router>
          <Route exact path="/search " component={ElasticSearch} />
      </Router>
    );
  }
}
 
export default Routes;