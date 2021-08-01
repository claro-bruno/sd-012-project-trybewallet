import React from 'react';
import PropTypes from 'prop-types';

export default class InputValue extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="valor">
        Valor:
        <input
          type="number"
          name="value"
          id="valor"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputValue.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
