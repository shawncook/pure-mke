import React, { Fragment } from "react";
import Slugify from "../../utils/slugify";
import "./recyclablesDetail.scss";

import data from "../../data.json";
import IconBattery from "../../img/icon-battery.svg";
import IconCleaner from "../../img/icon-cleaner.svg";
import IconOilSpill from "../../img/icon-oil-spill.svg";
import IconResponsive from "../../img/icon-responsive.svg";
import { ReactComponent as IconClose } from "../../img/icon-close.svg";
import LinkButton from "../common/linkButton";

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
    if (!this.props.match && !this.props.match.params)
      return <>Item not found</>;

    const { onCloseItem } = this.props;
    const item = data.recyclables.find(
      item => item.id == this.props.match.params.name
    );
    return (
      <Fragment>
        <Helmet>
          <title>{item.name} - pureMKE</title>
          <meta name="description" content={item.desc} />
        </Helmet>
        <div className="app">
          <div className={`categoryDetail ${Slugify(item.name)}`}>
            <Link to="/">
              <button onClick={onCloseItem}>
                <IconClose />
              </button>
            </Link>
            <div className="categoryDetail__wrapper">
              <div className="categoryDetail__header">
                <div className="categoryDetail__image">
                  <img src={IconBattery} alt={item.name} />
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
