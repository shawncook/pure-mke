import React from 'react';
import './categoryDetail.scss';

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
      <div className="categoryDetail">
        <button
          onClick={() => onCloseCategory()}
        >
          Close
        </button>
        <h1>{category.name}</h1>
        <div>
          <p>{category.desc}</p>
        </div>
      </div>
    );
  }
}
