import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { labelText, placeholder, id, name, value, onChange } = this.props;
    return (
      <div className={ id }>
        <label htmlFor={ id }>
          { labelText }
          <input
            data-testid={ id }
            id={ id }
            name={ name }
            value={ value }
            onChange={ onChange }
            placeholder={ placeholder }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
}.isRequired;

export default Input;
