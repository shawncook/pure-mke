import React, { Fragment } from "react";
import CategoryDetail from "../categoryDetail/index";
import data from "../../data.json";
import "../../app.scss";
import Slugify from "../../utils/slugify";
import ElasticSearch from "../elasticSearch/index";
import Helmet from "react-helmet";
import Icon from '../../utils/icons';
import './home.scss';
import RecyclablesDetail from "../recyclables";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      activeCategory: false,
      activeItem:false,
      searchItem: ""
    };
    this.onCategoryClick = this.onCategoryClick.bind(this);
    this.onCloseCategory = this.onCloseCategory.bind(this);
    this.onCloseItem = this.onCloseItem.bind(this);
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

  onCloseItem() {
    this.setState({
      activeItem: false
    });
  }


  render() {
    const { activeCategory, activeItem } = this.state;
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
          {!activeCategory && !activeItem && (
            <ElasticSearch
              onClick={this.onItemClick}
            />
          )}
          {!activeCategory && !activeItem && 0 < categories.length && (
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
                        <Icon width={100} name={Slugify(item.name)} />
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

          {activeItem && (
            <RecyclablesDetail
              onCloseItem={this.onCloseItem}
            />
          )}
        </div>
      </Fragment>
    );
  }
}

export default Home;
