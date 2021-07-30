import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputValue extends Component {
  render() {
    const { valor, handleChange } = this.props;
    return (
      <label htmlFor="valor">
        Valor
        <input
          type="number"
          id="valor"
          name="valor"
          value={ valor }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputValue.propTypes = {
  valor: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
