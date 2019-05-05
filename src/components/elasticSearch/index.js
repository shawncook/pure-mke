import React, { Component } from "react";
import { ReactiveBase, DataSearch } from "@appbaseio/reactivesearch";
import "./search.scss";
import { Link } from "react-router-dom";

class ElasticSearch extends Component {
  _isMounted = false;
  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  // c/o https://stackoverflow.com/a/29897112
  boldString = (str, find) => {
    var re = new RegExp(find, "gi");
    return { __html: str.replace(re, `<strong>${find}</strong>`) };
  };

  render() {
    return (
      <div className="search">
        <ReactiveBase
          app="pure-mke"
          credentials="8fOyBlB93:f94865a6-c27a-4d4f-a4b4-e2cc337c6960"
        >
          <DataSearch
            className="search__input"
            innerClass={{
              input: "search__input-field"
            }}
            componentId="search"
            dataField={["name", "tags"]}
            fuzziness={0}
            placeholder="What item are you trying to recycle?"
            render={({
              //loading, // `true` means the query is still in progress
              //error, // error info
              data, // parsed suggestions by Reactivesearch
              //rawData, // unmodified suggestions from Elasticsearch
              value // the current value in the search
              //downshiftProps // downshift props
            }) => {
              {
                const uniqueData = [...new Set(data)];

                return (
                  <ul className="search__list">
                    {uniqueData.map(element => (
                      <li key={element.value} className="search__item">
                        <Link
                          to={{
                            pathname: `/item/${element.source.id}`,
                          }}
                        >
                          <span className="search__item-title">
                            {element.source.name}
                          </span>
                          <span
                            className="search__item-meta"
                            dangerouslySetInnerHTML={this.boldString(
                              element.value,
                              value.trim()
                            )}
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                );
              }
            }}
          />
        </ReactiveBase>
      </div>
    );
  }
}
export default ElasticSearch;
