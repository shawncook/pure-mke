import React, { Component } from 'react';
import { ReactiveBase, DataSearch, CategorySearch, ResultCard } from '@appbaseio/reactivesearch';

class ElasticSearch extends React.Component {
  render() {
    return (
      <div className="main-container">
        <ReactiveBase
          app="pure-mke"
          credentials="8fOyBlB93:f94865a6-c27a-4d4f-a4b4-e2cc337c6960"
         >
          Hello from ReactiveSearch!

          <DataSearch
              componentId="search"
              dataField={[
                'name',
                'tags'
              ]}
              fuzziness={0}
            render={
              ({
                  loading,            // `true` means the query is still in progress 
                  error,              // error info
                  data,               // parsed suggestions by Reactivesearch
                  rawData,            // unmodified suggestions from Elasticsearch
                  value,              // the current value in the search
                  downshiftProps      // downshift props
              }) => (
              
              <>
              <ul className="test">{data.map(element => {
                return <li>{element.source.name} <strong>({element.value})</strong> </li>
              }) }</ul>
              
              </>
              )
            }
              style={{
                marginBottom: 20
              }}
            />
        </ReactiveBase>
      </div>
    );
  }
}
export default ElasticSearch;