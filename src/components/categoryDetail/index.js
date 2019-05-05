import React from 'react';
import Slugify from '../../utils/slugify';
import './categoryDetail.scss';

import IconBattery from '../../img/icon-battery.svg';
import IconCleaner from '../../img/icon-cleaner.svg';
import IconOilSpill from '../../img/icon-oil-spill.svg';
import IconResponsive from '../../img/icon-responsive.svg';

/**
 * Category detail component.
 */
export default class CategoryDetail extends React.PureComponent {
  /**
   * @returns {object} Component markup.
   */
  render() {
    const {
      category,
      onCloseCategory,
    } = this.props;
    return (
      <div className={`categoryDetail ${Slugify(category.name)}`}>
        <button
          onClick={() => onCloseCategory()}
        >
          Close
        </button>
        <h1 className="categoryDetail__header">
          {category.name}
        </h1>
        <div
          className="categoryDetail__image"
        >
          <img src={IconBattery} alt={category.name} />
          <img src={IconCleaner} alt={category.name} />
          <img src={IconOilSpill} alt={category.name} />
          <img src={IconResponsive} alt={category.name} />
        </div>
        <div
          className="categoryDetail__desc"
        >
          <p>{category.desc}</p>
        </div>
      </div>
    );
  }
}
