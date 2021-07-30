import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      label,
      type,
      name,
      value,
      onChange,
      dataTestId,
    } = this.props;
    return (
      <label htmlFor={ dataTestId }>
        { label }
        <input
          data-testid={ dataTestId }
          label={ label }
          type={ type }
          name={ name }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = ({
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  dataTestId: PropTypes.string,
}).isRequired;

export default Input;
