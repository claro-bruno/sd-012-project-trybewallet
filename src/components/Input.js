import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { labelText, type, id, className, name, value, onChange } = this.props;
    return (
      (type === 'number' ? (
        <label htmlFor={ id }>
          { labelText }
          <input
            type={ type }
            id={ id }
            data-testid={ id }
            className={ `${className} ${id}` }
            name={ name }
            value={ value }
            step="0.01"
            min="0"
            onChange={ onChange }
          />
        </label>
      ) : (
        <label htmlFor={ id }>
          { labelText }
          <input
            type={ type }
            id={ id }
            data-testid={ id }
            className={ `${className} ${id}` }
            name={ name }
            value={ value }
            onChange={ onChange }
          />
        </label>
      ))
    );
  }
}

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
