import React from 'react';
import {
  ReactiveBase,
  DataSearch
} from '@appbaseio/reactivesearch';
import './search.scss';

class ElasticSearch extends React.Component {
  render() {
    return (
      <div className="search">
        <ReactiveBase
          app="pure-mke"
          credentials="8fOyBlB93:f94865a6-c27a-4d4f-a4b4-e2cc337c6960"
         >
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
                <ul className="search__list">
                  {data.map((element) => (
                    <li
                      key={element.value}
                      className="search__item"
                    >
                      <span
                        className="search__item-title"
                      >
                        {element.source.name}
                      </span>
                      {element.value}
                    </li>
                  ))}
                </ul>
              )
            }
          />
        </ReactiveBase>
      </div>
    );
  }
}
export default ElasticSearch;
