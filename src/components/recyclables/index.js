import React, { Fragment } from "react";
import Slugify from "../../utils/slugify";
import data from "../../data.json";
import Icon from "../../utils/icons";
import { ReactComponent as IconClose } from "../../img/icon-close.svg";
import LinkButton from "../common/linkButton";
import "./recyclablesDetail.scss";

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

/**
 * Category detail component.
 */
export default class RecyclablesDetail extends React.PureComponent {
  /**
   * @returns {object} Component markup.
   */
  render() {
    if (!this.props.match && !this.props.match.params) {
      return <Fragment>Item not found</Fragment>;
    }

    const { onCloseItem } = this.props;

    const item = data.recyclables.find(
      item => item.id == this.props.match.params.id
    );
    return (
      <Fragment>
        <Helmet>
          <title>{item.name} - pureMKE</title>
          <meta name="description" content={item.desc} />
        </Helmet>
        <div className="app">
          <div className={`categoryDetail ${Slugify(item.name)}`}>
            <Link
              className="categoryDetail__close-button"
              to="/"
              onClick={onCloseItem}
            >
              <IconClose />
            </Link>
            <div className="categoryDetail__wrapper">
              <div className="categoryDetail__header">
                <div className="categoryDetail__image">
                  <Icon width={100} name={Slugify(item.name)} />
                </div>
                <h1 className="categoryDetail__title">{item.name}</h1>
              </div>
              <div>
                <LinkButton
                  to={{
                    pathname: "/recycling-map",
                    state: { prefilters: item.location }
                  }}
                >
                  Recyle me
                </LinkButton>
              </div>
              <div
                className="categoryDetail__desc"
                dangerouslySetInnerHTML={{ __html: item.body }}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
