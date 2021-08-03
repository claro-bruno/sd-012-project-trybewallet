import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { id, name, value, type, handleChange, labelName, placeholder } = this.props;
    return (
      <label htmlFor={ id }>
        { labelName }
        <input
          id={ id }
          name={ name }
          value={ value }
          type={ type }
          onChange={ handleChange }
          placeholder={ placeholder }
        />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
