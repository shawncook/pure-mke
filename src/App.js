import React from 'react';
import Textsearch from './components/textsearch';
import data from './data.json';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchKeyword: '',
    };
  }

  render() {
    const recyclables = data.recyclables;
    const categories = data.categories;
    return (
      <div
        className="App"
      >
        <Textsearch
          searchKeyword={this.state.searchKeyword}
        />
        {0 < categories.length && (
          <ul
            className="app__categories"
          >
            {categories.map((item) => {
              return (
                <li
                  key={item}
                >
                  {item.name}
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
                  key={item}
                >
                  {item.name}
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
