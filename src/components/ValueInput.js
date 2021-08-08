import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ValueInput extends Component {
  render() {
    const { handle, value } = this.props;
    return (
      <label htmlFor="value-input">
        Valor
        <input
          type="number"
          name="value"
          id="value-input"
          onChange={ handle }
          value={ value }
        />
      </label>
    );
  }
}

ValueInput.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  handle: PropTypes.func.isRequired,
};

export default ValueInput;
