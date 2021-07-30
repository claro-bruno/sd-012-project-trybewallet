import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      name,
      label,
      type,
      value,
      placeholder,
      testId,
      onChange,
    } = this.props;

    return (
      <label htmlFor={ name }>
        { label }
        <input
          type={ type }
          name={ name }
          value={ value }
          id={ name }
          placeholder={ placeholder }
          data-testid={ testId }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.defaultProps = {
  label: '',
  testId: '',
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  testId: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Input;
