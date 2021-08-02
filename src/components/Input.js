import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { name, placeholder, value, type, onChange, dataTestid } = this.props;
    return (
      <input
        data-testid={ dataTestid }
        type={ type }
        name={ name }
        placeholder={ placeholder }
        value={ value }
        onChange={ onChange }
      />
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  dataTestid: PropTypes.string.isRequired,
};

export default Input;
