import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { name, placeholder, value, onChange, dataTestid } = this.props;
    return (
      <input
        data-testid={ dataTestid }
        type="text"
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
  onChange: PropTypes.func.isRequired,
  dataTestid: PropTypes.string.isRequired,
};

export default Input;
