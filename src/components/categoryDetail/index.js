import React, { Fragment } from "react";
import Slugify from "../../utils/slugify";
import "./categoryDetail.scss";
import { ReactComponent as IconClose } from "../../img/icon-close.svg";
import Icon from "../../utils/icons";
import LinkButton from "../common/linkButton";
import data from "../../data.json";

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

/**
 * Category detail component.
 */
export default class CategoryDetail extends React.PureComponent {
  /**
   * @returns {object} Component markup.
   */
  render() {
    if (!this.props.match && !this.props.match.params) {
      return <Fragment>Category not found</Fragment>;
    }

    const { onCloseCategory } = this.props;
    const category = data.categories.find(
      category => category.id == this.props.match.params.id
    );

    const items = data.recyclables.filter(
      item => item.categories && item.categories.includes(category.slug)
    );
    return (
      <Fragment>
        <Helmet>
          <title>{category.name} - pureMKE</title>
          <meta name="description" content={category.desc} />
        </Helmet>
        <div className="app">
          <div className={`categoryDetail ${Slugify(category.name)}`}>
            <Link
              className="categoryDetail__close-button"
              to="/"
              onClick={onCloseCategory}
            >
              <IconClose />
            </Link>

            <div className="categoryDetail__wrapper">
              <div className="categoryDetail__header">
                <h1 className="categoryDetail__title">{category.name}</h1>
                <div className="categoryDetail__image">
                  <Icon width={100} name={Slugify(category.name)} />
                </div>
              </div>
              <div>
                <LinkButton
                  to={{
                    pathname: "/recycling-map",
                    state: { prefilters: ["bags"] }
                  }}
                >
                  Where Can I Recycle This?
                </LinkButton>
              </div>
              <div
                className="categoryDetail__desc"
                dangerouslySetInnerHTML={{ __html: category.desc }}
              />

              <div className="categoryDetail__items">
                <h3 className="categoryDetail__items-title">
                  Recyclables Using {category.name}
                </h3>
                <ul className="categoryDetail__items-list">
                  {items.map(item => (
                    <Link
                      className="categoryDetail__items-item"
                      key={item.id}
                      to={`/item/${item.id}`}
                    >
                      {" "}
                      <li key={item.id}>{item.name}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
