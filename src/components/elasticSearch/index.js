import React, { Component } from 'react';
import { ReactiveBase } from '@appbaseio/reactivesearch';
class ElasticSearch extends React.Component {
  render() {
    return (
      <div className="main-container">
        <ReactiveBase
          app="MovieAppFinal"
          credentials="RxIAbH9Jc:6d3a5016-5e9d-448f-bd2b-63c80b401484"
         >
          Hello from ReactiveSearch!
        </ReactiveBase>
      </div>
    );
  }
}
export default ElasticSearch;