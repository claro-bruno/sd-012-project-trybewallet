import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputValor extends Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label htmlFor="valor">
        Valor
        <input
          type="number"
          id="valor"
          name="value"
          value={ value }
          placeholder="Adicione um valor"
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputValor.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputValor;
