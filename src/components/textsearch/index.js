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
      onChange,
    } = this.props;
    return (
      <div className="textsearch">
        <label htmlFor="textsearch">
          Search
        </label>
        <input
          placeholder="Search for items to recycle..."
          id="textsearch"
          onChange={(value) => onChange(value)}
        />
      </div>
    );
  }
}
