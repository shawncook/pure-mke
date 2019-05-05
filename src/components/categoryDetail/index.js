import React, { Fragment } from "react";
import Slugify from "../../utils/slugify";
import "./categoryDetail.scss";
import { ReactComponent as IconClose } from '../../img/icon-close.svg';
import Icon from '../../utils/icons';
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
            className="categoryDetail__close-button"
            onClick={() => onCloseCategory()}
          >
            <IconClose />
          </button>
          <div className="categoryDetail__wrapper">
            <div className="categoryDetail__header">
              <h1 className="categoryDetail__title">
                {category.name}
              </h1>
              <div className="categoryDetail__image">
                <Icon width={100} name={Slugify(category.name)} />
              </div>
            </div>
            <div>
              <LinkButton to={{ pathname: "/recycling-map", state: { prefilters: ['bags']} }}>
                I want to recycle this!
              </LinkButton>
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
