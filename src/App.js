import React from 'react';
import CategoryDetail from './components/categoryDetail';
import Textsearch from './components/textsearch';
import data from './data.json';
import './app.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeCategory: false,
      searchKeyword: '',
    };
    this.onCategoryClick = this.onCategoryClick.bind(this);
    this.onCloseCategory = this.onCloseCategory.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onCategoryClick(category) {
    this.setState({
      activeCategory: category,
    });
  }

  onCloseCategory() {
    this.setState({
      activeCategory: false,
    });
  }

  onChange(event) {
    this.setState({
      searchKeyword: event.target.value,
    });
  }

  render() {
    const {
      activeCategory,
      searchKeyword,
    } = this.state;
    const categories = data.categories;
    return (
      <div
        className="app"
      >
        {! activeCategory && (
          <Textsearch
            onChange={this.onChange}
            searchKeyword={searchKeyword}
          />
        )}
        {searchKeyword && (
          <span className="app__results">
            {`Results for ${searchKeyword}`}
          </span>
        )}
        {! activeCategory && 0 < categories.length && (
          <ul
            className="app__categories"
          >
            {categories.map((item) => {
              return (
                <li
                  className="app__category"
                  key={item.name}
                  onClick={() => this.onCategoryClick(item)}
                >
                  <h1>{item.name}</h1>
                </li>
              );
            })}
          </ul>
        )}
        {activeCategory && (
          <CategoryDetail
            category={activeCategory}
            onCloseCategory={this.onCloseCategory}
          />
        )}
      </div>
    );
  }
}

export default App;
