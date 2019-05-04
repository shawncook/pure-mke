import React from 'react';
import Textsearch from './components/textsearch';
import data from './data.json';
import './app.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchKeyword: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({
      searchKeyword: event.target.value,
    });
  }

  render() {
    const {
      searchKeyword,
    } = this.state;
    const recyclables = data.recyclables;
    const categories = data.categories;
    return (
      <div
        className="app"
      >
        <Textsearch
          onChange={this.onChange}
          searchKeyword={searchKeyword}
        />
        {searchKeyword && (
          <span className="app__results">
            {`Results for ${searchKeyword}`}
          </span>
        )}
        {0 < categories.length && (
          <ul
            className="app__categories"
          >
            {categories.map((item) => {
              return (
                <li
                  className="app__category"
                  key={item.name}
                >
                  <h1>{item.name}</h1>
                  <div>{item.desc}</div>
                </li>
              );
            })}
          </ul>
        )}
        {0 < recyclables.length && (
          <ul
            className="app__recyclables"
          >
            {recyclables.map((item) => {
              return (
                <li
                  className="app__recyclable"
                  key={item.name}
                >
                  <h1>{item.name}</h1>
                  <div>{item.desc}</div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default App;
