import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Value extends Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="value">
        Valor:
        <input type="number" id="value" onChange={ handleChange } value={ value } />
      </label>
    );
  }
}

Value.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};
