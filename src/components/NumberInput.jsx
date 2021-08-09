import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NumberInput extends Component {
  render() {
    const { valor, onChange } = this.props;
    return (
      <label htmlFor="valor">
        Valor
        <input
          type="number"
          id="valor"
          name="valor"
          value={ valor }
          onChange={ onChange }
        />
      </label>
    );
  }
}

NumberInput.propTypes = {
  valor: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NumberInput;
