import React from 'react';
import './textsearch.scss';

/**
 * Text search component.
 */
export default class Textsearch extends React.PureComponent {
  /**
   * @returns {object} Component markup.
   */
  render() {
    const {
      searchKeyword,
    } = this.props;
    return (
      <div className="textsearch">
        <label for="textsearch">
          Search
        </label>
        <input
          id="textsearch"
          value={searchKeyword}
        />
      </div>
    );
  }
}
