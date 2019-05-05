import React from "react";
import CategoryDetail from "../categoryDetail/index";
import data from "../../data.json";
import "../../app.scss";
import ElasticSearch from "../elasticSearch/index";
import Helmet from "react-helmet";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      activeCategory: false,
      searchKeyword: "",
      searchItem: ""
    };
    this.onCategoryClick = this.onCategoryClick.bind(this);
    this.onCloseCategory = this.onCloseCategory.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onCategoryClick(category) {
    this.setState({
      activeCategory: category
    });
  }

  onCloseCategory() {
    this.setState({
      activeCategory: false
    });
  }

  onChange(event) {
    this.setState({
      searchKeyword: event.target.value
    });
  }

  render() {
    const { activeCategory, searchKeyword } = this.state;
    const categories = data.categories;
    return (
      <>
        <Helmet>
          <title>Home - pureMKE</title>
          <meta
            name="description"
            content="This is our hackathon app for easily finding out how and where to recycle materials"
          />
        </Helmet>
        <div className="app">
          {!activeCategory && (
            <ElasticSearch onClick={this.onSearchItemClick} />
          )}
          {searchKeyword && (
            <span className="app__results">{`Results for ${searchKeyword}`}</span>
          )}
          {!activeCategory && 0 < categories.length && (
            <ul className="app__categories">
              {categories.map(item => {
                return (
                  <li
                    className="app__category"
                    key={item.name}
                    onClick={() => this.onCategoryClick(item)}
                  >
                    <div className="app__category-wrapper">{item.name}</div>
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
      </>
    );
  }
}

export default Home;
