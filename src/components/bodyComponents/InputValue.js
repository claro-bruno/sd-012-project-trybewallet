import React from 'react';
import PropTypes from 'prop-types';

class InputValue extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label htmlFor="value">
        Valor
        <input
          type="number"
          id="value"
          name="value"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputValue.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.number,
}.isRequired;

export default InputValue;
