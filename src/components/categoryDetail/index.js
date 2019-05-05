import React, { Fragment } from "react";
import Slugify from "../../utils/slugify";
import "./categoryDetail.scss";

import IconBattery from "../../img/icon-battery.svg";
import IconCleaner from "../../img/icon-cleaner.svg";
import IconOilSpill from "../../img/icon-oil-spill.svg";
import IconResponsive from "../../img/icon-responsive.svg";
import { ReactComponent as IconClose } from '../../img/icon-close.svg';
import LinkButton from "../common/linkButton";


import { Helmet } from "react-helmet";

/**
 * Category detail component.
 */
export default class CategoryDetail extends React.PureComponent {
  /**
   * @returns {object} Component markup.
   */
  render() {
    const { category, onCloseCategory } = this.props;
    return (
      <Fragment>
        <Helmet>
          <title>{category.name} - pureMKE</title>
          <meta name="description" content={category.desc} />
        </Helmet>
        <div
          className={`categoryDetail ${Slugify(category.name)}`}
        >
          <button
            onClick={() => onCloseCategory()}
          >
            <IconClose />
          </button>
          <div className="categoryDetail__wrapper">
            <div className="categoryDetail__header">
              <div className="categoryDetail__image">
                <img
                  src={IconBattery}
                  alt={category.name}
                />
              </div>
              <h1 className="categoryDetail__title">
                {category.name}
              </h1>
            </div>
            <div>
              <LinkButton to={{ pathname: "/recycling-map", state: { prefilters: ['bags']} }}>Recyle me</LinkButton>
            </div>
            <div
              className="categoryDetail__desc"
              dangerouslySetInnerHTML={{ __html: category.desc }}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}
