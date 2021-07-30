import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CurrencySelect extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="moeda">
        Moeda:
        <select value={ value } onChange={ onChange } id="moeda">
          <option value="real">Real</option>
        </select>
      </label>
    );
  }
}

CurrencySelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CurrencySelect;
