import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { label, id, name, type, value, handleChange } = this.props;

    return (
      <label htmlFor={ id } className="form-label">
        {label}
        <input
          data-testid={ id }
          id={ id }
          name={ name }
          className="form-control"
          type={ type }
          required
          value={ value }
          onChange={ (event) => handleChange(event) }
        />
      </label>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
