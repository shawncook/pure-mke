import React, { Fragment } from "react";
import CategoryDetail from "../categoryDetail/index";
import data from "../../data.json";
import "../../app.scss";
import ElasticSearch from "../elasticSearch/index";
import Helmet from "react-helmet";
import IconBattery from "../../img/icon-battery.svg";
import './home.scss';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      activeCategory: false,
      searchItem: ""
    };
    this.onCategoryClick = this.onCategoryClick.bind(this);
    this.onCloseCategory = this.onCloseCategory.bind(this);
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

  render() {
    const { activeCategory } = this.state;
    const categories = data.categories;
    return (
      <Fragment>
        <Helmet>
          <title>Home - pureMKE</title>
          <meta
            name="description"
            content="This is our hackathon app for easily finding out how and where to recycle materials"
          />
        </Helmet>
        <div
          className="app"
        >
          {!activeCategory && (
            <ElasticSearch
              onClick={this.onSearchItemClick}
            />
          )}
          {!activeCategory && 0 < categories.length && (
            <ul
              className="app__categories"
            >
              {categories.map(item => {
                return (
                  <li
                    className="app__category"
                    key={item.name}
                    onClick={() => this.onCategoryClick(item)}
                  >
                    <div
                      className="app__category-wrapper"
                    >
                      <div
                        className="app__category-image"
                      >
                        <img
                          src={IconBattery}
                          alt={item.name}
                          height="60"
                          width="60"
                        />
                      </div>
                      <h2
                        className="app__category-title"
                      >
                        {item.name}
                      </h2>
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
      </Fragment>
    );
  }
}

export default Home;
