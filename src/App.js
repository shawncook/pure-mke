import React from 'react';
import CategoryDetail from './components/categoryDetail';
import data from './data.json';
import './app.scss';
import ElasticSearch from './components/elasticSearch/index';

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
          <ElasticSearch
            onChange={this.onChange}
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
                  <div className="app__category-wrapper">
                    {item.name}
                  </div>
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
